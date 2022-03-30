import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlanCreatePlanComponent } from './subscribe-plan-create-plan.component';

describe('SubscribePlanCreatePlanComponent', () => {
  let component: SubscribePlanCreatePlanComponent;
  let fixture: ComponentFixture<SubscribePlanCreatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePlanCreatePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlanCreatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
