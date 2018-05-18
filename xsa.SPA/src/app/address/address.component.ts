import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';
import { RestApiService } from '../_service/rest-api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  btnDisabled = false;
  currentAddress: any;

  constructor(private dataService: DataService, private restService: RestApiService) { }

 async ngOnInit() {
    try {
      const data = await this.restService.getAddress();
      if(JSON.stringify( data['address'] ) == '{}' && this.dataService.message == '') {
        this.dataService.warning(
          'You have not entered your shipping address. Please enter your shipping address.'
        )
      }
      this.currentAddress = data['address'];
    } catch(error) {
      this.dataService.error(error['message']);
    
    }
  }

  async updateAddress() {
    this.btnDisabled = true;
    
    try {
      const data = await this.restService.updateAddresss(this.currentAddress);
      data['success'] ? (await this.dataService.getProfile(), this.dataService.success(data['message']))
      : this.dataService.error(data['message']);
    } catch(error) {
      this.dataService.error(error['message']);
    }

    this.btnDisabled = false;
  }

}
