import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';



import { AuthInterceptorInterceptor } from './core/interceptor/auth-interceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
