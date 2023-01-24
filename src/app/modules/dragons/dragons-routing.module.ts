import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDragonComponent } from './add-new-dragon/add-new-dragon.component';
import { ViewAllDragonsComponent } from './view-all-dragons/view-all-dragons.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewDragons', pathMatch: 'full' },
  { path: 'ViewDragons', component: ViewAllDragonsComponent },
  { path: 'CreateDragons', component: AddNewDragonComponent },
  { path: "CreateDragons/:id", component: AddNewDragonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule { }
