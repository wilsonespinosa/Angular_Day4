import { TaxCalculatorService } from './../tax-calculator.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent implements OnInit {

  @Input() vat: number;
  article = "Tesla";
  value: number = 10000;
  total: number  = 0;
  taxValue: number = 0;
  myPipe = 'currency'

  constructor(
    private taxCalculatorService: TaxCalculatorService
  ) { }

  ngOnInit() {
  }

  calculate() {
    this.total = this.taxCalculatorService.calculateTotal(Number(this.value), this.vat);
    this.taxValue = this.taxCalculatorService.calculateTax(Number(this.value), this.vat);
  }

}
