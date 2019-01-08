import { Component, HostListener, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ILogin } from '../login';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { JwtService } from '../jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    'scss/main.css',
    'scss/util.css'
  ]
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: 'admin', password: 'admin123' };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  user = new User();


  constructor(
    private jwtService: JwtService,
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService
       ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard/';
    this.authService.logout();
  }

  onBlurMethod(idInput: string) {
    const input = <HTMLInputElement>document.getElementById(idInput);
    if (input.value.trim() !== '') {
        input.classList.add('has-val');
    } else {
      input.classList.remove('has-val');
    }

  }

  login(f: NgForm) {
    this.user.username = f.value.username;
    this.user.password = f.value.password;
    this.jwtService.login(this.user).subscribe( newUser => {
      this.user = newUser;
      console.log(this.user.token);
      this.jwtService.setSession(newUser);
      this.router.navigate([this.returnUrl]);
    });

  }
  logout() {
    localStorage.removeItem('access_token');
  }
  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  get f() { return this.loginForm.controls; }
/*
  login() {
    // check if form is valid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.f.userid.value === this.model.userid && this.f.password.value === this.model.password) {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      } else {
        this.message = 'Please check your userid and password';
      }
    }
  }
  */
}
