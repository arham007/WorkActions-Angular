import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityTestingComponent } from './quality-testing.component';

describe('QualityTestingComponent', () => {
  let component: QualityTestingComponent;
  let fixture: ComponentFixture<QualityTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
