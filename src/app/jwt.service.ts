import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user';
import { tap } from 'rxjs/operators';
import { now } from 'moment';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }


  login (user: User): Observable<User> {
    const url = 'http://localhost:3000/testSignIn';
    console.log(user.username);
    console.log(user.password);
    return this.http.post<User>(url, user, httpOptions);
  }

  setSession(authResult) {
    const date: number = Date.now();
    const expiresAt = date + parseInt(authResult.expiresIn, 10);

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', authResult.username);

    console.log('date: ' + date);
    console.log('date Expires: ' + expiresAt);
    console.log('localStorage: ' + localStorage.getItem('expires_at'));
}

  logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      localStorage.removeItem('username');
  }
  isBefore(limit: number) {
    const rightNow: number = Date.now();
    if (rightNow < limit) {
      console.log('true!');
      return true;
    } else {
      console.log('false!');
      return false;
    }
  }

  public isLoggedIn() {
      return this.isBefore(localStorage.getItem('expires_at'));
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }
}
