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
  products: any;

  constructor(private dataService: DataService, private restService: RestApiService) { }

 async ngOnInit() {
   try {
    const data = await this.restService.getProducts();
    data['success'] ? (this.products = data['products']) 
    : this.dataService.error(data['message']);
   } catch(error) {
     this.dataService.error(error);
   }
  }

}
