import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  model: any = {};
  btnDisabled = false;

  constructor(private dataService: DataService, private restService: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await  this.restService.getCategories();
      data['success'] ? (this.categories = data['categories'])
      : this.dataService.error(data['message']);
    } catch (error) {
      this.dataService.error(error);
    }
  }

  async addCategory() {
    this.btnDisabled = true;
    try {
    const data = await this.restService.addCategories({
      category: this.model['newCategory']
    });
    data['success'] ? (this.dataService.success('Category successfully added'), 
    this.categories.push({name: this.model['newCategory']})) :
    this.dataService.error(data['message']);
  } catch (error) {
    this.dataService.error(error)
  }
  this.btnDisabled = false;
}

}
