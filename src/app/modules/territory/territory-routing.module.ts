import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTerritoryComponent } from './add-territory/add-territory.component';
import { ViewAllTerritoryComponent } from './view-all-territory/view-all-territory.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewTerritory', pathMatch: 'full' },
  { path: 'ViewTerritory', component: ViewAllTerritoryComponent },
  { path: 'Createrritory', component: AddTerritoryComponent },
  { path: "Createrritory/:id", component: AddTerritoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerritoryRoutingModule { }
