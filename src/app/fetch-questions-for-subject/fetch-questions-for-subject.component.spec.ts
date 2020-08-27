import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchQuestionsForSubjectComponent } from './fetch-questions-for-subject.component';

describe('FetchQuestionsForSubjectComponent', () => {
  let component: FetchQuestionsForSubjectComponent;
  let fixture: ComponentFixture<FetchQuestionsForSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchQuestionsForSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchQuestionsForSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
