import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  sectionTitle = 'Dashboard';
  user = new User();
  username: string;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = localStorage.getItem('username');
      this.userService.getUser(this.username).subscribe( user => {
        this.user = user;
      });
  });
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
