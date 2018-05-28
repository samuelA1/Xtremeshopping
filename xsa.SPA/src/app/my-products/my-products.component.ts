import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  btnDisabled = false;
  products: any[];

  constructor(private dataService: DataService, private restService: RestApiService) { }

 async ngOnInit() {
   try {
    const data = await this.restService.getSellerProducts();
    data['success'] ? (this.products = data['products']) 
    : this.dataService.error(data['message']);
   } catch(error) {
     this.dataService.error(error);
   }
  }

  async removeProduct(index, product) {
    this.products.splice(index, 1);
    try {
      const data = await this.restService.deleteProduct(product._id);
      (data['success']) ? (this.dataService.success(data['message']))
      : this.dataService.error(data['message'])
    } catch(error) {
      this.dataService.error(error);
    }
  }

}
