import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { EmailValidatorFn } from './email-validator';

@Directive({
  selector: '[sampleEmailValidator]',
  exportAs: 'sampleEmailValidator',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return EmailValidatorFn()(control);
  }

}
