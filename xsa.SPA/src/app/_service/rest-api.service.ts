import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
@Injectable()
export class RestApiService {
    baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
}

register(model: any) {
    return this.http.post(this.baseUrl + '/accounts/signup', model, {headers: this.getHeaders()}).toPromise();
}

login(model: any) {
    this.http.post(this.baseUrl + '/accounts/login', model, {headers: this.getHeaders()}).toPromise();
}

}
