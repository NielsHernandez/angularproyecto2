import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('role', localStorage.getItem('role'));
    if (localStorage.getItem('role') != null || localStorage.getItem('role') != undefined) {
      if (localStorage.getItem('role') === 'ADMIN')
        return true;
      else {
        this.router.navigate(['/home']);
        return false;

      }
    }

    this.router.navigate(['/home']);
    return false;
  }

  constructor(private router: Router) {
  }

}
