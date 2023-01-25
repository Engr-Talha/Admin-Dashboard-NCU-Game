import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/core/guards/user-guard.guard';
import { CreateEventAmaComponent } from './create-event-ama/create-event-ama.component';
import { ViewEventsAmaComponent } from './view-events-ama/view-events-ama.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewEvent', pathMatch: 'full' },
  { path: 'ViewEvent', component: ViewEventsAmaComponent, canActivate: [UserGuardGuard] },
  { path: 'CreateEvent', component: CreateEventAmaComponent, canActivate: [UserGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmaSectionRoutingModule {}
