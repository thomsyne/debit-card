/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebitCardComponent } from './debit-card.component';

describe('DebitCardComponent', () => {
  let component: DebitCardComponent;
  let fixture: ComponentFixture<DebitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
