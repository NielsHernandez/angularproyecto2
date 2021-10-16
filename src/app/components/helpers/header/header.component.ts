import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != undefined || localStorage.getItem('token') != null) {
      this.isLogged = true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
