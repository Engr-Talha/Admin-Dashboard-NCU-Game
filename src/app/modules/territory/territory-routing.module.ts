import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/core/guards/user-guard.guard';
import { AddTerritoryComponent } from './add-territory/add-territory.component';
import { ViewAllTerritoryComponent } from './view-all-territory/view-all-territory.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewTerritory', pathMatch: 'full' },
  { path: 'ViewTerritory', component: ViewAllTerritoryComponent, canActivate: [UserGuardGuard] },
  { path: 'Createrritory', component: AddTerritoryComponent, canActivate: [UserGuardGuard] },
  { path: 'Createrritory/:id', component: AddTerritoryComponent, canActivate: [UserGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerritoryRoutingModule {}
