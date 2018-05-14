import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  productId: any;

  constructor(private dataService: DataService,
     private restService: RestApiService, 
     private route: ActivatedRoute,
     private router: Router) { }

  async ngOnInit() {
    this.route.params.subscribe(res => {
      this.productId = res['id'];
    });
    const data = await this.restService.getSingleProduct(this.productId);
    data['success'] ? this.product = data['product'] : (this.router.navigate(['/']),this.dataService.error(data['message']))
  }

}
