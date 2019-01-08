import { Component, OnInit, OnChanges, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { UserService } from './user.service';
import { User } from './user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    'css/resume.css'
],
encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit {

  public user = new User();
  username: string;
  private userSub: Subscription;
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['name'];

      this.userSub = this.userService.getUser(this.username).subscribe( user => {
        this.user = user;
      });
  });
  }

}
