import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../login/scss/main.css',
    '../login/scss/util.css'
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(f: NgForm) {
    const user = new User();
    user.username = f.value.username;
    user.email = f.value.email;
    user.password = f.value.password;
    this.userService.createAccount(user).subscribe();

  }
  onBlurMethod(idInput: string) {
    const input = <HTMLInputElement>document.getElementById(idInput);
    if (input.value.trim() !== '') {
        input.classList.add('has-val');
    } else {
      input.classList.remove('has-val');
    }

  }
}
