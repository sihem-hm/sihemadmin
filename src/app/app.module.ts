import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';

import { GrphComponent } from './grph/grph.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';     
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'primeng/chart';



            //api


@NgModule({
  declarations: [
    AppComponent,
   
    GrphComponent
  ],
  imports: [
    NgxChartsModule,
    BrowserModule,
    ChatModule,
    AccordionModule,
    BrowserAnimationsModule,

    ChartModule

    


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
