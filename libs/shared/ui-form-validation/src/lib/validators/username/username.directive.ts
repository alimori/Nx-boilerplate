import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { usernamePatternValidator } from './username-validator';

@Directive({
      // tslint:disable-next-line: directive-selector
      selector: '[sampleUsernamePattern]',
      exportAs:'sampleUsernamePattern',
      providers: [
            { provide: NG_VALIDATORS, useExisting: UsernamePatternDirective, multi: true }
      ]
})
export class UsernamePatternDirective implements Validator {
      constructor() { }

      validate(control: AbstractControl): { [key: string]: any } | null {
            return usernamePatternValidator()(control);
      }
}
