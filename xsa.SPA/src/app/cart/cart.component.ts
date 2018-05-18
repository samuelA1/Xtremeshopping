import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_service/rest-api.service';
import { Router } from '@angular/router';
import { DataService } from '../_service/data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  btnDisabled = false;
  handler: any;
  quantities: any = [];

  constructor(private dataService: DataService,
     private restService: RestApiService,
     private router: Router) { }


  trackByCartItems(index: number, item: any) {
    return item._id;
  }

  get cartItems() {
    return this.dataService.getCart();
  }

  get cartTotal() {
    let total = 0;
    this.cartItems.forEach((data, index) => {
      total += data['price'] * this.quantities[index];
    });
    return total;
  }

  removeProduct(index, product) {
    this.quantities.splice(index, 1);
    this.dataService.removeFromCart(product);
  }

  ngOnInit() {
    this.cartItems.forEach(data => {
      this.quantities.push(1)
    });
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'assets/img/logo.png',
      locale: 'auto',
      token: async stripeToken => {
        let products;
        products = [];
        this.cartItems.forEach((d, index) => {
          products.push({
            product: d['_id'],
            quantity: this.quantities[index],
          });
        });

        try {
          const data = await this.restService.payment(
            {
              totalPrice: this.cartTotal,
              products,
              stripeToken,
            },
          );
          data['success']
            ? (this.dataService.clearCart(), this.dataService.success('Purchase Successful.'))
            : this.dataService.error(data['message']);
        } catch (error) {
          this.dataService.error(error['message']);
        }
      },
    });
  }

  validate() {
    if (!this.quantities.every(data => data > 0)) {
      this.dataService.warning('Quantity cannot be less than one.');
    } else if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']).then(() => {
        this.dataService.warning('You need to login before making a purchase.');
      });
    } else if (!this.dataService.user['address']) {
      this.router.navigate(['/profile/address']).then(() => {
        this.dataService.warning('You need to login before making a purchase.');
      });
    } else {
      this.dataService.message = '';
      return true;
    }
  }

  checkout() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        this.handler.open({
          name: 'Xtreme',
          description: 'Checkout Payment',
          amount: this.cartTotal * 100,
          closed: () => {
            this.btnDisabled = false;
          },
        });
      } else {
        this.btnDisabled = false;
      }
    } catch (error) {
      this.dataService.error(error);
    }
  }
}

