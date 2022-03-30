import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddROleComponent } from './add-role.component';

describe('AddROleComponent', () => {
  let component: AddROleComponent;
  let fixture: ComponentFixture<AddROleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddROleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddROleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
