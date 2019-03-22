import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from "./data"

import {scan} from 'rxjs/operators';




@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']

})
export class ChatDialogComponent implements OnInit {
single:any[]

  view: any[] = [300, 300];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService) {
    Object.assign(this,{single})
   }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .pipe(scan((acc, val) => acc.concat(val) ));
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

}
