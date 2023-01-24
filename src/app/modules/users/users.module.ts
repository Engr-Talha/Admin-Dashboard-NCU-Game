import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';


@NgModule({
  declarations: [
    ViewallusersComponent,
    ViewUserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
