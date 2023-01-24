import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmaSectionRoutingModule } from './ama-section-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CreateEventAmaComponent } from './create-event-ama/create-event-ama.component';
import { ViewEventsAmaComponent } from './view-events-ama/view-events-ama.component';


@NgModule({
  declarations: [
    CreateEventAmaComponent,
    ViewEventsAmaComponent
  ],
  imports: [
    CommonModule,
    AmaSectionRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    ButtonModule,
    ToastModule
  ]
})
export class AmaSectionModule { }
