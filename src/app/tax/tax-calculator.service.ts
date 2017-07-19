import { TaxVOS } from './../shared/mocks/taxValues';
import { Injectable } from '@angular/core';

@Injectable()
export class TaxCalculatorService {
  constructor() { }
   calculateTotal(value: number, vat: number): number  {
    return value + value * (vat / 100);
  }

  calculateTax(value: number, vat: number): number {
    return value * (vat / 100);
  }
  getTax() {
    return TaxVOS;
  }

}
