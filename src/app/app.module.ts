import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/helpers/header/header.component';
import {HomeComponent} from "./components/main/home/home.component";
import {CreateComponent as UserCreateComponent} from "./components/users/create/create.component";
import {IndexComponent as UserIndexComponent} from "./components/users/index/index.component";
import {IndexComponent as AccessIndexComponent} from "./components/access/index/index.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/main/login/login.component";
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import { ListComponent } from './components/reports/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserCreateComponent,
    UserIndexComponent,
    AccessIndexComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('643611153022-8eq0reu9vioi50rfuf6k0bjmjl5r1j06.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
