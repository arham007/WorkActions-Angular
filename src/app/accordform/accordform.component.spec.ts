import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordformComponent } from './accordform.component';

describe('AccordformComponent', () => {
  let component: AccordformComponent;
  let fixture: ComponentFixture<AccordformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
