import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BookService} from'./book.service';
import {LoginService} from'./login.service';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login";
import {LogoutComponent} from "./logout";
import {StoreComponent} from "./store.component"
import {AdminPageComponent} from "./admin.Page.component"
import {LogoutService} from "./logout.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    StoreComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BookService,LoginService,LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
