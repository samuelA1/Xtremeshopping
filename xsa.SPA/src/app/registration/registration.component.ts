import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../_service/rest-api.service';
import { DataService } from '../_service/data.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
model: any = {};
btnDisabled = false;

  constructor(private restService: RestApiService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  validate() {
    if(this.model.name) {
      if(this.model.email) {
        if(this.model.password) {
          if(this.model.password1) {
            if(this.model.password == this.model.password1) {
              return true
            } else {
              this.dataService.error('Passwords do not match');
            }
          }else {
            this.dataService.error('Confirmation password not entered');
          }
        }else {
          this.dataService.error('Password is not entered');
        }
      }else {
        this.dataService.error('Email is not entered');
      }
    } else {
      this.dataService.error('Name is not entered');
    }
  }

  async register() {
    this.btnDisabled = true;
    try {
      if(this.validate()) {
        const data = await this.restService.register(this.model);

        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.dataService.success('Registration successful');
        } else {
          this.dataService.error(data['message']);
        }
      }
    } catch (error) {
      this.dataService.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
