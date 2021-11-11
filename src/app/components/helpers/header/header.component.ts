import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean = false;
  public isAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != undefined || localStorage.getItem('token') != null) {
      this.isLogged = true;
    }
    if (localStorage.getItem('role') != undefined || localStorage.getItem('role') != null) {
      if (localStorage.getItem('role') == "ADMIN") {
        this.isAdmin = true;
      }
    }
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
