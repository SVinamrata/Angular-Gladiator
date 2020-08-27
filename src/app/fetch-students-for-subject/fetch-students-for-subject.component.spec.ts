import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchStudentsForSubjectComponent } from './fetch-students-for-subject.component';

describe('FetchStudentsForSubjectComponent', () => {
  let component: FetchStudentsForSubjectComponent;
  let fixture: ComponentFixture<FetchStudentsForSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchStudentsForSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchStudentsForSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
