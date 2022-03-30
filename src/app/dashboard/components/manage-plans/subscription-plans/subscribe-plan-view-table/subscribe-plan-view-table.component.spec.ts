import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlanViewTableComponent } from './subscribe-plan-view-table.component';

describe('SubscribePlanViewTableComponent', () => {
  let component: SubscribePlanViewTableComponent;
  let fixture: ComponentFixture<SubscribePlanViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePlanViewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlanViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
