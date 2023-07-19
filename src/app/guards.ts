import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, NavigationEnd, Router, RouterEvent, RouterStateSnapshot, UrlTree, createUrlTreeFromSnapshot } from "@angular/router";
import { HttpService } from "./services/http.service";
import { UserService } from "./services/user.service";
import { User } from "./entities/classes";
import { filter, pairwise } from "rxjs";



@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private httpService: HttpService, private router: Router, private userService: UserService) {
  }

  canActivateMain(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.userService.user) {
      return true;
    }
    let email = localStorage.getItem('userEmail');
    let password = localStorage.getItem('userPassword');
    if (email && password) {
      let loginSubscription = this.httpService.login(email, password).subscribe({
        next: (data: User | string) => {
          if (typeof(data) === 'string') {
            localStorage.clear();
            this.router.navigate(['/login']);
          } else {
            this.userService.user = data;
            localStorage.setItem("userEmail", `${data.name}`);
            localStorage.setItem("userPassword", `${data.password}`);
          }
          loginSubscription.unsubscribe();
        }
      });
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}

export const MainGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  return inject(PermissionsService).canActivateMain(next, state);
}