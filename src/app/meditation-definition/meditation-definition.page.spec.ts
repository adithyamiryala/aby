import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationDefinitionPage } from './meditation-definition.page';

describe('MeditationDefinitionPage', () => {
  let component: MeditationDefinitionPage;
  let fixture: ComponentFixture<MeditationDefinitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditationDefinitionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationDefinitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
