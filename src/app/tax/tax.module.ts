import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxCalculatorService } from './tax-calculator.service';
import { SharedModule } from './../shared/shared.module';
import { TaxComponent } from './tax/tax.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
     FormsModule,
    SharedModule
  ],
  declarations: [
      TaxCalculatorComponent,TaxComponent],
  providers: [TaxCalculatorService],
  exports: [TaxComponent]
})
export class TaxModule { }
