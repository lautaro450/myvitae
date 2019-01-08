import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:3000/api/user';


  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getUser(username: string): Observable<User> {
    const url = `${this.usersUrl}/${username}`;
    return this.http.get<User>(url);
  }
  createAccount (user: User): Observable<User> {
    const url = this.usersUrl + '/createAccount';
    return this.http.post<User>(url, user, httpOptions);
  }
  updateProfile (user: User): Observable<User> {
    const url = this.usersUrl + '/update';
    return this.http.post<User>(url, user, httpOptions);
  }
}
