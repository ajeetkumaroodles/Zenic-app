import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenicEditionComponent } from './zenic-edition.component';

describe('ZenicEditionComponent', () => {
  let component: ZenicEditionComponent;
  let fixture: ComponentFixture<ZenicEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZenicEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenicEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
