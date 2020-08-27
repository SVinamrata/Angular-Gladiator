import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchStudentsResultForASubjectComponent } from './fetch-students-result-for-asubject.component';

describe('FetchStudentsResultForASubjectComponent', () => {
  let component: FetchStudentsResultForASubjectComponent;
  let fixture: ComponentFixture<FetchStudentsResultForASubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchStudentsResultForASubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchStudentsResultForASubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
