/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppChildComponent } from './app-child.component';

describe('AppChildComponent', () => {
  let component: AppChildComponent;
  let fixture: ComponentFixture<AppChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
