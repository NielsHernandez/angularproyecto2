import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/main/home/home.component";
import {LoginComponent} from "./components/main/login/login.component";
import {IndexComponent as UserIndexComponent} from "./components/users/index/index.component";
import {IndexComponent as AccessIndexComponent} from "./components/access/index/index.component";
import {CreateComponent as UserCreateComponent} from "./components/users/create/create.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserIndexComponent, canActivate: [AuthGuard]},
  {path: 'users/new', component: UserCreateComponent, canActivate: [AuthGuard]},
  {path: 'access', component: AccessIndexComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
