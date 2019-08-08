import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PranayamamPage } from './pranayamam.page';

describe('PranayamamPage', () => {
  let component: PranayamamPage;
  let fixture: ComponentFixture<PranayamamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranayamamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranayamamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
