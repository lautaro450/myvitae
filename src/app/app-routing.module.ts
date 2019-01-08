import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardMessageComponent } from './dashboard/dashboard-message/dashboard-message.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
},
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
     { path: 'dashboard', component: DashboardHomeComponent, pathMatch: 'full' },
     { path: 'dashboard/edit', component: UserEditComponent, pathMatch: 'full'},
     { path: 'dashboard/messages', component: DashboardMessageComponent, pathMatch: 'full'}
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'user/:name',
    component: UserComponent
  },
{
      path: '',
      component: LoginLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent, pathMatch: 'full'},
        { path: 'register', component: RegisterComponent, pathMatch: 'full'}
      ]
},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
