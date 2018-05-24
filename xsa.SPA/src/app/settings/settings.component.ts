import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  btnDisabled = false;
  currentSettings: any;

  constructor(private dataService: DataService, private restService: RestApiService) { }

  async ngOnInit() {
    try {
      if (this.dataService.user) {
        this.currentSettings = Object.assign({
          newPwd: '',
          pwdConfirm: ''
        }, this.dataService.user);
      }
    } catch (error) {
      this.dataService.error(error);
    }
  }

  validate(settings) {
    if (settings['name']) {
      if (settings['email']) {
        if (settings['newPwd']) {
          if (settings['pwdConfirm']) {
            if (settings['newPwd'] === settings['pwdConfirm']) {
              return true;
            } else {
              this.dataService.error('Passwords do not match.');
            }
          } else {
            this.dataService.error('Please enter confirmation password.');
          }
        } else {
          if (!settings['pwdConfirm']) {
            return true;
          } else {
            this.dataService.error('Please enter new password.');
          }
        }
      } else {
        this.dataService.error('Please enter your email.');
      }
    } else {
      this.dataService.error('Please enter your name.');
    }
  }

  async updateProfile() {
    this.btnDisabled = true;
    try {
      if(this.validate(this.currentSettings)) {
        const data = await this.restService.updateProfile({
          name: this.currentSettings['name'],
          email: this.currentSettings['email'],
          password: this.currentSettings['newPwd'],
          isSeller: this.currentSettings['isSeller']
        });
          data['success'] ? ( await this.dataService.getProfile(), this.dataService.success(data['message']))
          : this.dataService.error(data['message']);
      }
    } catch (error) {
      this.dataService.error(error);
    }
    this.btnDisabled = false;
  }

}
