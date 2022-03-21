import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputbox2Component } from './inputbox2.component';

describe('Inputbox2Component', () => {
  let component: Inputbox2Component;
  let fixture: ComponentFixture<Inputbox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inputbox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
