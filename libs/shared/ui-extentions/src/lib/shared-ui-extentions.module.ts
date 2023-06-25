import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDisableCountdownDirective } from './button/button-disable-countdown/button-disable-countdown.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
  
    ButtonDisableCountdownDirective
  ],
  exports: [
  
    ButtonDisableCountdownDirective
  ],
})
export class SharedUiExtentionsModule { }
