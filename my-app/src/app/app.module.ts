import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BookService} from'./book.service';
import {LoginService} from'./login.service';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login";
import {StoreComponent} from "./store.component"
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BookService,LoginService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
