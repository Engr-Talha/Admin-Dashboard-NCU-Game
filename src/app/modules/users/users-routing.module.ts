import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/core/guards/user-guard.guard';
import { UserBattlesComponent } from './user-battles/user-battles.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewUsers', pathMatch: 'full' },
  { path: 'ViewUsers', component: ViewallusersComponent, canActivate: [UserGuardGuard] },
  { path: 'ViewUserDetails/:id', component: ViewUserDetailsComponent, canActivate: [UserGuardGuard] },
  { path: 'ViewUserBattles', component: UserBattlesComponent, canActivate: [UserGuardGuard] },
  // { path: "Createrritory/:id", component: AddTerritoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
