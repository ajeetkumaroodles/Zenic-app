import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlanViewCardComponent } from './subscribe-plan-view-card.component';

describe('SubscribePlanViewCardComponent', () => {
  let component: SubscribePlanViewCardComponent;
  let fixture: ComponentFixture<SubscribePlanViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePlanViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlanViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
