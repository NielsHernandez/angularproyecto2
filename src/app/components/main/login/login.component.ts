import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {

  }

  public submit() {
    this.loginService.login(this.form.value).subscribe((res: HttpResponse<any>) => {
      const authorization = res.headers.get('Authorization');
      const authorizationValues = authorization?.split(" ");
      const [, second]: any = authorizationValues;
      localStorage.setItem('token', second);

      this.router.navigate(['home']);
    });
  }

}
