import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  page: 1;
  query: string;
  content: any;

  constructor(private route: ActivatedRoute,
     private dataService: DataService,
     private restService: RestApiService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.query = res['query'];
      this.page = 1;
      this.getProducts()
    })
  }

  get lower() {
    return 1 + this.content.hitsPerPage * this.content.page;
  }

  get upper() {
    return Math.min(
      this.content.hitsPerPage * (this.content.page + 1),
      this.content.nbHits,
    );
  }

  async getProducts() {
    this.content = null;
    try {
      const data = await this.restService.search(this.query, this.page-1);
      data['success'] ? this.content = data['content']
      : this.dataService.error('Could not find search');
    } catch (error) {
      this.dataService.error(error);
      
    }
  }

}
