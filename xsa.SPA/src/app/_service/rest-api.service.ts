import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { ReturnStatement } from '@angular/compiler';
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
    return this.http.post(this.baseUrl + '/accounts/login', model, {headers: this.getHeaders()}).toPromise();
}

getProfile() {
   return this.http.get(this.baseUrl + '/accounts/profile', {headers: this.getHeaders()}).toPromise();
}

updateProfile(model: any) {
   return this.http.post(this.baseUrl + '/accounts/profile', model, {headers: this.getHeaders()}).toPromise();
}

getAddress() {
    return this.http.get(this.baseUrl + '/accounts/address', {headers: this.getHeaders()}).toPromise();
}

updateAddresss(model: any) {
    return this.http.post(this.baseUrl + '/accounts/address', model, {headers: this.getHeaders()}).toPromise();
}

getCategories() {
    return this.http.get(this.baseUrl + '/categories', {headers: this.getHeaders()}).toPromise();
}

addCategories(model: any) {
    return this.http.post(this.baseUrl + '/categories', model, {headers: this.getHeaders()}).toPromise();
}

getSellerProducts() {
    return this.http.get(this.baseUrl + '/seller/products', {headers: this.getHeaders()}).toPromise();
}

addProducts(form: any) {
    return this.http.post(this.baseUrl + '/seller/products', form, {headers: this.getHeaders()})
    .toPromise();
}

getProducts(categoryId: any, pageNumber: number) {
    return  this.http.get(this.baseUrl + '/categories/' + categoryId + '?page=' + (pageNumber-1))
    .toPromise();
}

getSingleProduct(productId: any) {
    return this.http.get(this.baseUrl + '/product/' + productId).toPromise();
}

getAllProducts() {
    return this.http.get(this.baseUrl + '/products').toPromise();
}

postReview(review: any) {
    return this.http.post(this.baseUrl + '/review', review, {headers: this.getHeaders()} ).toPromise();
}

search(query: any, page: any) {
    return this.http.get(this.baseUrl + '/search?query=' + query + '&page=' + page).toPromise();
}

payment(paymentDeatails: any) {
    return this.http.post(this.baseUrl + '/payment', paymentDeatails, {headers: this.getHeaders()})
    .toPromise();
}

}
