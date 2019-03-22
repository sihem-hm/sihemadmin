import { Injectable ,OnInit} from '@angular/core';
import { environment } from '../../environments/environment';


import { ApiAiClient } from 'api-ai-javascript';
import {BehaviorSubject} from 'rxjs';

import {single} from './chat-dialog/data'



// Message class for displaying messages in the component
export class Message{
  constructor(public content: string, public sentBy: string,public type?:string) {}
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });


  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}

   data = {
    type:"graph",
    response: 
      {"inProgress":95,"rejected":1,"executed":1}
    
  }

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then((res:any) => {
        console.log("res.",res);
        
       let intent = res.result.metadata.intentName
       if(intent =='api')  {
         
        const botMessage = new Message("", 'bot','graph');
        this.update(botMessage);

       } else {

       
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
       }
      });
  }



  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

}
