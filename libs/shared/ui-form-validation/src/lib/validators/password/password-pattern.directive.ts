import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { passwordPatternValidator } from './password-pattern-validator';

@Directive({
      selector: '[samplePasswordPattern]',
      exportAs:'samplePasswordPattern',
      providers: [
            { provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true }
      ]
})
export class PasswordPatternDirective implements Validator {
      constructor() { }

      validate(control: AbstractControl): { [key: string]: any } | null {
            return passwordPatternValidator()(control);
      }
}
