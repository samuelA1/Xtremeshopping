import { Component } from '@angular/core';
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

  constructor(private router: Router, private dataService: DataService) {}

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
    localStorage.clear();
    this.router.navigate[''];
  }

  search() {}
}
