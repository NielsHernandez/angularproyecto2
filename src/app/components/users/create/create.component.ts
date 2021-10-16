import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RolService} from "../../../services/rol.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {Role} from "../../../models/role";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public roles: Role[] | null = [];
  public form: FormGroup;

  constructor(private rolService: RolService,
              private router: Router,
              private userService: UserService) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      employeeCode: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.rolService.getAll().subscribe(response => {
      this.roles = response.body;

      if (response.status == 403) {
        localStorage.removeItem('token');
      }
    });
  }

  public submit() {
    const employee = {
      id: 0,
      employeeCode: this.form.value.employeeCode,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
    };

    let user: User = {
      id: 0,
      username: this.form.value.username,
      password: this.form.value.password,
      employee: employee,
      role: {
        id: this.form.value.role,
        role: ''
      }
    }

    this.userService.create(user).subscribe(resp => {
      if (resp.status == 201) {
        this.router.navigate(['/users']);
      }

      if (resp.status == 403) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    });
  }

}
