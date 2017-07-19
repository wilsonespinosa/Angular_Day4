import { TaxCalculatorService } from './../tax-calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  tax16: string ;
  tax19: string ;
  constructor( private taxCalculatorService: TaxCalculatorService) { }

  ngOnInit() {
     this.tax16 =  this.taxCalculatorService.getTax().filter(tax => tax.id === '1')[0].value;
     this.tax19 =  this.taxCalculatorService.getTax().filter(tax => tax.id === '2')[0].value;
  }

}
