import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsanaDefinationPage } from './asana-defination.page';
import { AsanaDefination } from './asana-defination.model';

describe('AsanaDefinationPage', () => {
  let component: AsanaDefinationPage;
  let fixture: ComponentFixture<AsanaDefinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsanaDefinationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsanaDefinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
