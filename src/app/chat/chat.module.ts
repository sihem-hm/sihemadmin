import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@NgModule({
  imports: [
    NgxChartsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    ChatDialogComponent
  ],
  exports: [ ChatDialogComponent, HttpClientModule ], // <-- export here
  providers: [ChatService,HttpClient]
})
export class ChatModule { }
