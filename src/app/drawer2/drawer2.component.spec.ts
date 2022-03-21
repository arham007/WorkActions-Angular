import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drawer2Component } from './drawer2.component';

describe('Drawer2Component', () => {
  let component: Drawer2Component;
  let fixture: ComponentFixture<Drawer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Drawer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Drawer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
