import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeaddressComponent } from './officeaddress.component';

describe('OfficeaddressComponent', () => {
  let component: OfficeaddressComponent;
  let fixture: ComponentFixture<OfficeaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
