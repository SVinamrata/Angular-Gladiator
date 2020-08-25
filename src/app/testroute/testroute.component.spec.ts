import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrouteComponent } from './testroute.component';

describe('TestrouteComponent', () => {
  let component: TestrouteComponent;
  let fixture: ComponentFixture<TestrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
