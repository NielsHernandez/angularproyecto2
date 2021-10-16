import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {Access} from "../../../models/access";
import {AccessService} from "../../../services/access.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public accesses: Access[] | null = [];

  constructor(private accessService: AccessService,
              private router: Router) { }

  ngOnInit(): void {
    this.accessService.getAll().subscribe(res => {
      console.log("hola")
      console.log(res.status)
      if (res.status == 403) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }

      this.accesses = res.body;
      console.log(this.accesses);
    });
  }

}
