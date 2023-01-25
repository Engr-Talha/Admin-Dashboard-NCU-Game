import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { UserBattlesComponent } from './user-battles/user-battles.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ViewallusersComponent, ViewUserDetailsComponent, UserBattlesComponent],
  imports: [CommonModule, UsersRoutingModule, TableModule, FormsModule, TabViewModule, CardModule],
})
export class UsersModule {}
