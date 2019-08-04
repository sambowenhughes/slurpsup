import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { StringFilterPipe } from './shared/pipes/string-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StringFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
