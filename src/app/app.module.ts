import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './shared/layout/home-layout/home-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardMessageComponent } from './dashboard/dashboard-message/dashboard-message.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    DashboardComponent,
    LandingComponent,
    HeaderComponent,
    HomeLayoutComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    ContactComponent,
    RegisterComponent,
    UserEditComponent,
    DashboardHomeComponent,
    DashboardMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token'); },
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['http://localhost:4200/auth/login']
      }
    }),
    MomentModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
