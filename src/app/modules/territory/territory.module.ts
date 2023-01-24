import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerritoryRoutingModule } from './territory-routing.module';
import { AddTerritoryComponent } from './add-territory/add-territory.component';
import { ViewAllTerritoryComponent } from './view-all-territory/view-all-territory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddTerritoryComponent,
    ViewAllTerritoryComponent
  ],
  imports: [
    CommonModule,
    TerritoryRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TerritoryModule { }
