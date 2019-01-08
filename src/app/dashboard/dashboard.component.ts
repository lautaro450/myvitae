import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['scss/dashboard.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardComponent implements OnInit {

  id: string;
  constructor(private router: Router, public authService: AuthService, private userService: UserService) { }

  user: User;

  ngOnInit() {
    document.body.classList.add('bodyFontStyle');
  }

  getUser(username: string) {
    return this.userService.getUser('dante450')
      .subscribe(
        user => {
          this.user = user;
        }
      );
  }
  logout(): void {
    console.log('Logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
