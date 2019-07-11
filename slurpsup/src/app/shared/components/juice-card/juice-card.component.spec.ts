import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceCardComponent } from './juice-card.component';

describe('JuiceCardComponent', () => {
  let component: JuiceCardComponent;
  let fixture: ComponentFixture<JuiceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
