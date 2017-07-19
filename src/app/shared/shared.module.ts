import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainButtonComponent],
   exports: [MainButtonComponent]
})
export class SharedModule { }
