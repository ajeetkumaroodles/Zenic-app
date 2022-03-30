import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningPlansComponent } from './running-plans.component';

describe('RunningPlansComponent', () => {
  let component: RunningPlansComponent;
  let fixture: ComponentFixture<RunningPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
