import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuryaNamaskarPage } from './surya-namaskar.page';

describe('SuryaNamaskarPage', () => {
  let component: SuryaNamaskarPage;
  let fixture: ComponentFixture<SuryaNamaskarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuryaNamaskarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuryaNamaskarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
