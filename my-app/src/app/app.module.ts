import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import {BookService} from'./book.service';
import {LoginService} from'./login.service';
import {UserService} from'./user.service';
import {AdminService} from'./admin.service';
import {ClientService} from'./client.service';
import {AppComponent } from './app.component';
import {LoginComponent} from "./login";
import {LogoutComponent} from "./logout";
import {StoreComponent} from "./store.component"
import {StatComponent} from "./stat"
import {AdminPageComponent} from "./admin.Page.component"
import {UserManagementComponent} from "./user.management.component"
import {BookManagementComponent} from "./book.management.component"
import {LogoutService} from "./logout.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    StoreComponent,
    AdminPageComponent,
    UserManagementComponent,
    BookManagementComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookService,LoginService,LogoutService,UserService,AdminService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
