import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculatorComponent } from './tax-calculator.component';

describe('TaxCalculatorComponent', () => {
  let component: TaxCalculatorComponent;
  let fixture: ComponentFixture<TaxCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
