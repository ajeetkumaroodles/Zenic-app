import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTermconditionComponent } from './add-termcondition.component';

describe('AddTermconditionComponent', () => {
  let component: AddTermconditionComponent;
  let fixture: ComponentFixture<AddTermconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTermconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTermconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
