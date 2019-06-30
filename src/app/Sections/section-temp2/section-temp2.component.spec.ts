import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTemp2Component } from './section-temp2.component';

describe('SectionTemp2Component', () => {
  let component: SectionTemp2Component;
  let fixture: ComponentFixture<SectionTemp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTemp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
