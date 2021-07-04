import { Component ,OnInit} from '@angular/core';
import { data } from './chat/chat-dialog/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';
  data:any[]

  view: any[] = [500, 500];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

constructor(){
  Object.assign(this,{data})

}}
