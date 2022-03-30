import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTermconditionComponent } from './view-termcondition.component';

describe('ViewTermconditionComponent', () => {
  let component: ViewTermconditionComponent;
  let fixture: ComponentFixture<ViewTermconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTermconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
