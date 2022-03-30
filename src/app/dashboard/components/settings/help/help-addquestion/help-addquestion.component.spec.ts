import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAddquestionComponent } from './help-addquestion.component';

describe('HelpAddquestionComponent', () => {
  let component: HelpAddquestionComponent;
  let fixture: ComponentFixture<HelpAddquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpAddquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
