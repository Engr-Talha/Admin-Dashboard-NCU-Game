import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/core/guards/user-guard.guard';
import { AddNewDragonComponent } from './add-new-dragon/add-new-dragon.component';
import { ViewAllDragonsComponent } from './view-all-dragons/view-all-dragons.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewDragons', pathMatch: 'full' },
  { path: 'ViewDragons', component: ViewAllDragonsComponent, canActivate: [UserGuardGuard] },
  { path: 'CreateDragons', component: AddNewDragonComponent, canActivate: [UserGuardGuard] },
  { path: 'CreateDragons/:id', component: AddNewDragonComponent, canActivate: [UserGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragonsRoutingModule {}
