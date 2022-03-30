import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlanViewDetailsComponent } from './subscribe-plan-view-details.component';

describe('SubscribePlanViewDetailsComponent', () => {
  let component: SubscribePlanViewDetailsComponent;
  let fixture: ComponentFixture<SubscribePlanViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePlanViewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlanViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
