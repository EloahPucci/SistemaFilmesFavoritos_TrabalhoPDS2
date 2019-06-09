/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrilhasonoraListComponent } from './trilhasonora-list.component';

describe('TrilhasonoraListComponent', () => {
  let component: TrilhasonoraListComponent;
  let fixture: ComponentFixture<TrilhasonoraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrilhasonoraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhasonoraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
