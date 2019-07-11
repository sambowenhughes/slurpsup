import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewModalngComponent } from './add-review-modalng.component';

describe('AddReviewModalngComponent', () => {
  let component: AddReviewModalngComponent;
  let fixture: ComponentFixture<AddReviewModalngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewModalngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewModalngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
