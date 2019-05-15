import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BoardService} from '../app/board.service';
// import { Board } from '../app/board';
import {DragDropModule } from '@angular/cdk/drag-drop';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    DragulaModule.forRoot()
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
