import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddTamplateComponent } from './email-add-tamplate.component';

describe('EmailAddTamplateComponent', () => {
  let component: EmailAddTamplateComponent;
  let fixture: ComponentFixture<EmailAddTamplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAddTamplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
