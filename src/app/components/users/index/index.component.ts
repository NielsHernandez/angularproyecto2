import { Component, OnInit } from '@angular/core';
import {RolService} from "../../../services/rol.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public users: User[] | null = [];

  constructor(private rolService: RolService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      this.users = res.body;

      if (res.status == 403) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    });
  }

}
