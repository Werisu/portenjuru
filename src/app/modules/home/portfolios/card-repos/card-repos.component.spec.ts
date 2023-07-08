/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardReposComponent } from './card-repos.component';

describe('CardReposComponent', () => {
  let component: CardReposComponent;
  let fixture: ComponentFixture<CardReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
