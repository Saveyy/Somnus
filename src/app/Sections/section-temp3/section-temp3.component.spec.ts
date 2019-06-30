import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTemp3Component } from './section-temp3.component';

describe('SectionTemp3Component', () => {
  let component: SectionTemp3Component;
  let fixture: ComponentFixture<SectionTemp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTemp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTemp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
