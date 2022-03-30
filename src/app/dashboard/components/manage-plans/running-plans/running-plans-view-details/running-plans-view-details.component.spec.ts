import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningPlansViewDetailsComponent } from './running-plans-view-details.component';

describe('RunningPlansViewDetailsComponent', () => {
  let component: RunningPlansViewDetailsComponent;
  let fixture: ComponentFixture<RunningPlansViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningPlansViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningPlansViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
