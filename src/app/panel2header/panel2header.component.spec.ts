import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel2headerComponent } from './panel2header.component';

describe('Panel2headerComponent', () => {
  let component: Panel2headerComponent;
  let fixture: ComponentFixture<Panel2headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel2headerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel2headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
