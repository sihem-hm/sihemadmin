import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiAiClient, IServerResponse } from 'api-ai-javascript';
import { BehaviorSubject, Observable } from 'rxjs';

import {data} from './chat-dialog/data'



// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string, public type?: string ) { }
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });


  conversation = new BehaviorSubject<Message[]>([]);

   getwidget='http://localhost:8080/api/user/';
  constructor(public http: HttpClient) {
    
   }

  data = {
    type: "graph",
    response:
      { "inProgress": 95, "rejected": 1, "executed": 1 }

  }

  gettest(name: string){
    return this.http.get(this.getwidget+name);
  }

  getResponse(url:string) {
    return this.client.textRequest(url)
    };
  

    
    /*this.http.post(url,[] ).subscribe((res)=>{
      console.log(res);
    })*/
    /*return new Promise((resolve, reject) => {
      // Create the path for the HTTP request to get the weather
      let path = url;
      console.log('API Request: ' + path);
      this.http.post(url, (res) => {
          let body = ''; // var to store the response chunks
          console.log("heresssss");
          res.on('data', (d) => { body += d; }); // store each response chunk
          res.on('end', () => {
              // After all the data has been received parse the JSON for desired data
              var jsonObj = body;
             var op = []
              var key = Object.keys(JSON.parse(jsonObj))
              var values = Object.values(JSON.parse(jsonObj))
              console.log(key);
              console.log(values);
              key.forEach(e => {
                  op.push({'name':e})
              });
              values.forEach(e=>op.map(c=>c.value = e))
              resolve(JSON.stringify(op)) 
              
          });
        });
          });*/
        
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