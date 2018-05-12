import { CanActivate,  Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
    token = localStorage.getItem('token');

    constructor( private router: Router ) {}


    canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean {
        if(this.token) return true;

        this.router.navigate(['/login']);
        return false;
    }

}