import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { TodoInputComponent } from './todo.input.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
