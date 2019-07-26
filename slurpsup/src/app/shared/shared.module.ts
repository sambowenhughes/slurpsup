import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JuiceCardComponent } from './components/juice-card/juice-card.component';
import { AddReviewModalngComponent } from './components/add-review-modalng/add-review-modalng.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, JuiceCardComponent, AddReviewModalngComponent, MenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    AddReviewModalngComponent,
    JuiceCardComponent,
    MenuComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
