import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../_service/rest-api.service';
import { DataService } from '../../_service/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;
  quantity: any;
  sum: any = 0;

  constructor(private restService: RestApiService, private dataService: DataService) { }

  async ngOnInit() {
    try {
      const data = await this.restService.getOrders();
      if (data['success']) 
      { this.orders = data['orders'];
      for (const key in this.orders) {
        this.quantity = this.orders[key].products;
      }
      for (const key in this.quantity) {
        this.sum += this.quantity[key].quantity;
      }
     } else
      { this.dataService.error(data['message']);}
    } catch (error) {
      this.dataService.error(error);
    }
  }


}
