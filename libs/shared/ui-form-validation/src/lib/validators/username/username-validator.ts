import { AbstractControl, ValidatorFn } from '@angular/forms';

export function usernamePatternValidator(): ValidatorFn {

      return (control: AbstractControl): { [key: string]: any } | null => {
            const value = (control.value as string);
            const invalid = {
                  'usernamePattern': {
                        value: control.value,
                  }
            };

            return /^.{5,}$/.test(value) ? null : invalid; //  the username should have minimum 5 characters
      };
}