import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent implements OnInit {
  model: any = {
    price: 0,
    product_picture: null
  };

  btnDisabled = false;
  categories: any;

  constructor(private dataService: DataService,
     private restService: RestApiService,
     private router: Router) { }

  async ngOnInit() {
    try {
      const data = await this.restService.getCategories();
      data['success'] ? (this.categories = data['categories'])
      : this.dataService.error(data['message'])
    }catch(error) {
      this.dataService.error(error);
   } 
  }
  

  validate(product) {
    if (product.title) {
      if (product.price) {
        if (product.categoryId) {
          if (product.description) {
            if (product.product_picture) {
              return true;
            } else {
              this.dataService.error('Please select product image.');
            }
          } else {
            this.dataService.error('Please enter description.');
          }
        } else {
          this.dataService.error('Please select category.');
        }
      } else {
        this.dataService.error('Please enter a price.');
      }
    } else {
      this.dataService.error('Please enter a title.');
    }
  }

  fileChange(event: any) {
    this.model.product_picture = event.target.files[0];
  }

  async post() {
    this.btnDisabled = true;
    try {
      if(this.validate(this.model)) {
        const form = new FormData();
        for(const key in this.model) {
          if (this.model.hasOwnProperty(key)) {
            if(key == 'product_picture') {
              form.append(
                'product_picture',
                this.model.product_picture,
                this.model.product_picture.name
              )
            } else {
              form.append(key, this.model[key])
            }
          }
        }
        const data = await this.restService.addProducts(form);
        data['success'] ?
        this.router.navigate(['/profile/myproducts'])
            .then(() => this.dataService.success(data['message']))
            .catch(error => this.dataService.error(error))
          : this.dataService.error(data['message']);
      }
    }catch(error) {
      this.dataService.error(error);
    }

    this.btnDisabled = false;
  } 

}
