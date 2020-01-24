import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import { ProfileComponent } from './profile/profile.component';
//import { ViewProfileComponent } from '../app/view-profile/view-profile.component';

const routes: Routes = [
  { path:'', component: LoginComponent  },
  { path:'profile/:id', component: ProfileComponent},
  //{ path:'viewProfile', component: ViewProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
