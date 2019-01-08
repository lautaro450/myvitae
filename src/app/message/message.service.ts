import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  url = 'http://localhost:3000/api/message/addMessage';


  constructor( private http: HttpClient) { }

  sendMessage (message: Message): Observable<Message> {
    return this.http.post<Message>(this.url, message, httpOptions);
  }
}
