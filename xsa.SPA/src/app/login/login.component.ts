import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  btnDisabled = false
  returnUrl;

  constructor(private router: Router, 
    private dataService: DataService, 
    private restService: RestApiService,
    private route: ActivatedRoute) {
     }

  ngOnInit() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    this.returnUrl = returnUrl;
  }

  validate() {
    if(this.model.email) {
      if(this.model.password) {
        return true;
      } else {
        this.dataService.error('Password is not entered');
      }
    } else {
      this.dataService.error('Email is not entered.')
    }
  }

  async login() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.restService.login(this.model);
        if(data['success']) {
          localStorage.setItem('token', data['token']);
          await this.dataService.getProfile();
          this.router.navigateByUrl(this.returnUrl)
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
