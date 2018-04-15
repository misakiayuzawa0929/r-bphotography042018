import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Items1Component } from './items1.component';

describe('Items1Component', () => {
  let component: Items1Component;
  let fixture: ComponentFixture<Items1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Items1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Items1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
