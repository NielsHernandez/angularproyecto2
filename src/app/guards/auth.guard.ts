import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('token', localStorage.getItem('token'));
    if (localStorage.getItem('token') != null || localStorage.getItem('token') != undefined) {
      return true
    }

    this.router.navigate(['/login']);
    return false;
  }

  constructor(private router: Router) {
  }

}
