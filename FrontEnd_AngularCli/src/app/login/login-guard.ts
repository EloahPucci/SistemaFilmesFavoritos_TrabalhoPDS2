import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LoginServiceService } from "./login-service.service";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: LoginServiceService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/signin']);
        return false;
    }
}