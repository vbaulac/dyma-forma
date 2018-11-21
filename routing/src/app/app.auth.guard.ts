import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "./shared/models/user.model";

export interface CanComponentDeactivate {
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<CanComponentDeactivate>, Resolve<User> {
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // check permission, return true tu allow access protected by AuthGuard
        return true;
    }

    canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // this is for the nested routes

        return true;
    }

    canDeactivate(component: CanComponentDeactivate, router: ActivatedRouteSnapshot, state: RouterStateSnapshot, nexstate: RouterStateSnapshot)
     : Observable<boolean> | Promise<boolean> | boolean {

        return component.canDeactivate();
     }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {

        return new User('Tintin', '42');
        throw new Error("Method not implemented.");
    }
}