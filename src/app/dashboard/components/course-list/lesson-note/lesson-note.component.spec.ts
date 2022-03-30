import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonNoteComponent } from './lesson-note.component';

describe('LessonNoteComponent', () => {
  let component: LessonNoteComponent;
  let fixture: ComponentFixture<LessonNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
