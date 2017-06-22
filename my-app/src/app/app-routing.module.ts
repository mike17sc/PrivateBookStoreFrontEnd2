import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagementComponent } from './user.management.component';
import { BookManagementComponent } from './book.management.component';

const routes: Routes = [
  { path: 'UserManagement', component: UserManagementComponent },
  { path: 'BookManagement', component: BookManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
