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
  review = {
    title: '',
    description: '',
    rating: 0,
    productId: this.productId
  };
  btnDisabled = false;


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

  async postReview() {
    this.btnDisabled = true;
    try {
      const data = await this.restService.postReview({
        productId: this.productId,
        title: this.review.title,
        description: this.review.description,
        rating: this.review.rating,
      });
      console.log(this.review)
      data['success'] ? this.dataService.success(data['message'])
      : this.dataService.error('Sorry could not add review');
      this.btnDisabled = false;
    } catch (error) {
      this.dataService.error(error);
    }
    
  }

}
