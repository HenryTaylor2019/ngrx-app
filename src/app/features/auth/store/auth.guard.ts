import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
// import { AppState } from "../../reducers";
// import { isLoggedIn } from "./auth.selectors";

@Injectable()
export class AuthGuard implements CanActivate {
    // Interface that a class can implement to be a guard deciding if a route can be activated. 
    // If all guards return true, navigation continues. If any guard returns false, navigation is cancelled.

    // constructor(private store: Store<AppState>, private router: Router) {}

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //     return this.store
    //     .pipe(
    //         select(isLoggedIn),
    //         tap(loggedIn => {
    //             // Checking the 'isLoggedIn' service for boolean
    //             // Router will navigate to loggin if false
    //             if (!loggedIn) {
    //                 this.router.navigateByUrl('/login');
    //             }
    //         })
    //     )
    }
}