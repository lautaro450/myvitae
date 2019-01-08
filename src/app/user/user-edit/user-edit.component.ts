import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
 user = new User();
 username: string = localStorage.getItem('username');
  constructor( private userService: UserService ) { }
  sectionTitle = 'Curriculum';

  ngOnInit() {
    this.userService.getUser(this.username).subscribe( user => {
      this.user = user;
    });
  }

  updateProfile(f: NgForm) {
    this.user.company = f.value.company;
    this.user.username = f.value.username;
    this.user.email = f.value.email;
    this.user.firstName = f.value.firstName;
    this.user.lastName = f.value.lastName;
    this.user.address = f.value.address;
    this.user.country = f.value.country;
    this.user.city = f.value.city;
    this.user.zipCode = f.value.zipCode;
    this.user.aboutMe = f.value.aboutMe;
    this.userService.updateProfile(this.user).subscribe();
  }
  getUser(username: string) {
    return this.userService.getUser('dante450')
      .subscribe(
        user => {
          this.user = user;
        }
      );
  }
}
