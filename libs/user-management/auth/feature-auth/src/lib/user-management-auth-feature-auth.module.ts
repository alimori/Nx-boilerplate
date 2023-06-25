import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { UserManagementLoginDataAccessModule } from '../../../data-access/src/lib/user-management-login-data-access.module';



export const authRoutes: Route[] = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forChild(authRoutes),
    UserManagementLoginDataAccessModule
  ],
  declarations: [LoginComponent, LandingPageComponent],
  exports: [LoginComponent, LandingPageComponent],
})
export class UserManagementAuthFeatureAuthModule { }
