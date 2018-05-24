import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './_service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;

  constructor(private router: Router, public dataService: DataService) {
    dataService.getProfile();
    this.dataService.cartItems = this.dataService.getCart().length;
  }
  
  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.dataService.user = {};
    this.dataService.cartItems = 0;
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {
    if(this.searchTerm) {
      this.collapse();
      this.router.navigate(['search',{query: this.searchTerm}])
    }
  }

  
}
