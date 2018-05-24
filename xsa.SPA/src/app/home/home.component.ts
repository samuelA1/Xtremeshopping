import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products: any;

  constructor(private dataService: DataService, private restService: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.restService.getAllProducts();
      data['success'] ? this.products = data['products']
      : this.dataService.error('Products not loadded');

    } catch(error) {
      this.dataService.error(error)
    }
  }

}
