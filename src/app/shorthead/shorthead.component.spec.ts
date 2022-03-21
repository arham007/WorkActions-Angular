import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortheadComponent } from './shorthead.component';

describe('ShortheadComponent', () => {
  let component: ShortheadComponent;
  let fixture: ComponentFixture<ShortheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
