import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JuiceCardComponent } from './components/juice-card/juice-card.component';
import { AddReviewModalngComponent } from './components/add-review-modalng/add-review-modalng.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, JuiceCardComponent, AddReviewModalngComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    AddReviewModalngComponent,
    JuiceCardComponent
  ]
})
export class SharedModule { }
