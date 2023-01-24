import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonsRoutingModule } from './dragons-routing.module';
import { AddNewDragonComponent } from './add-new-dragon/add-new-dragon.component';
import { ViewAllDragonsComponent } from './view-all-dragons/view-all-dragons.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AddNewDragonComponent,
    ViewAllDragonsComponent
  ],
  imports: [
    CommonModule,
    DragonsRoutingModule,
    DragonsRoutingModule,
    DropdownModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DragonsModule { }
