import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../assets/css/paper-kit.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  sendMessage(f: NgForm) {
    const message = new Message();
    message.name = f.value.name;
    message.email = f.value.email;
    message.message = f.value.message;
    this.messageService.sendMessage(message).subscribe();
  }

}
