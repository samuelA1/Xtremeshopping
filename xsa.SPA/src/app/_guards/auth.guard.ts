import { CanActivate,  Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
    token = localStorage.getItem('token');

    constructor( private router: Router ) {}


    canActivate(): Observable<boolean> | boolean {
        if(this.token) {
            this.router.navigate(['/'])
            return false;
        } else {
            return true;
        }
    }

}