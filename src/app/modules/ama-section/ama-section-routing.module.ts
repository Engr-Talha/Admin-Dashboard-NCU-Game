import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventAmaComponent } from './create-event-ama/create-event-ama.component';
import { ViewEventsAmaComponent } from './view-events-ama/view-events-ama.component';

const routes: Routes = [
  { path: '', redirectTo: 'ViewEvent', pathMatch: 'full' },
  { path: 'ViewEvent', component: ViewEventsAmaComponent },
  { path: 'CreateEvent', component: CreateEventAmaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmaSectionRoutingModule { }
