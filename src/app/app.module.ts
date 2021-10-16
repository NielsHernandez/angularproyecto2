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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserCreateComponent,
    UserIndexComponent,
    AccessIndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
