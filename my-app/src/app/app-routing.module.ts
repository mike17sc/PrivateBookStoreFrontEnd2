import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user.management.component';
import { BookManagementComponent } from './book.management.component';
import {StatComponent} from "./stat";

const routes: Routes = [
  { path: 'UserManagement', component: UserManagementComponent },
  { path: 'BookManagement', component: BookManagementComponent },
  { path: 'Stat', component: StatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
