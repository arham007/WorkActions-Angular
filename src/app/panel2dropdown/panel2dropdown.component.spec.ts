import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel2dropdownComponent } from './panel2dropdown.component';

describe('Panel2dropdownComponent', () => {
  let component: Panel2dropdownComponent;
  let fixture: ComponentFixture<Panel2dropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel2dropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel2dropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
