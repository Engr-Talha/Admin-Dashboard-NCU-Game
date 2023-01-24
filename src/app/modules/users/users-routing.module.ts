import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewUsers', pathMatch: 'full' },
  { path: 'ViewUsers', component: ViewallusersComponent },
  { path: 'ViewUserDetails', component: ViewUserDetailsComponent },
  // { path: "Createrritory/:id", component: AddTerritoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
