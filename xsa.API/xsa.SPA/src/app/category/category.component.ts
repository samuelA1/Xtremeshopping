import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_service/rest-api.service';
import { DataService } from '../_service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryId: any;
  category: any;
  page = 1;

  constructor(private restService: RestApiService,
     private dataService: DataService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.categoryId = res['id'];
      this.getProducts();
    });
  }

  get lower() {
    return 10 * (this.page - 1) + 1;
  }

  get upper() {
    return Math.min(10 * this.page, this.category.totalProducts)
  }

  async getProducts(event?: any) {
    if (event) {
      this.category = null;
    }

    try {
      const data = await this.restService.getProducts(this.categoryId, this.page);
      data['success']? this.category = data : this.dataService.error(data['message']);
    } catch(error) {
      this.dataService.error(error);
    }
  }



}
