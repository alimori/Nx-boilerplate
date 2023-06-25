import { AbstractControl, ValidatorFn } from "@angular/forms";

export function EmailValidatorFn(): ValidatorFn {
  let regex: RegExp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    return regex.test(control.value) || !control.value ? null : {
     'email': true
    }
  };
};
