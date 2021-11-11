import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private loginService: LoginService, private router: Router,
              private socialAuthService: SocialAuthService) {
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
        const role = res.headers.get('Role');
        const userID = res.headers.get('UserID');
        const authorizationValues = authorization?.split(" ");
        const [, second]: any = authorizationValues;
        console.log("userID", userID);
        localStorage.setItem('token', second);
        localStorage.setItem('id', typeof userID === "string" ? userID : "");
        localStorage.setItem('role', typeof role === "string" ? role : "");

        this.router.navigate(['home']);


    });

  }

  public external() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((result) => console.log(result));
  }

}
