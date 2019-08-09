import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '../../node_modules/@angular/common';
import { FormsModule } from '../../node_modules/@angular/forms';
import { StringFilterPipe } from './shared/pipes/string-filter.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '../../node_modules/@angular/fire/firestore';


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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'slurpsup'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
