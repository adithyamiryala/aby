import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PranayamamDefinitionPage } from './pranayamam-definition.page';

describe('PranayamamDefinitionPage', () => {
  let component: PranayamamDefinitionPage;
  let fixture: ComponentFixture<PranayamamDefinitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranayamamDefinitionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranayamamDefinitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
