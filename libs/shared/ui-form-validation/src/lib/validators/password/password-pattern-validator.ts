import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordPatternValidator(): ValidatorFn {

      return (control: AbstractControl): { [key: string]: any } | null => {
            const value = (control.value as string);
            const invalid = {
                  'passwordPattern': {
                        value: control.value,
                  }
            };

            return /^([a-zA-Z0-9]).{5,}$/.test(value) ? null : invalid; //  the password should have minimum 5 characters
      };
}