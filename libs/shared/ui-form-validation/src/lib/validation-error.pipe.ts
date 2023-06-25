import { Pipe, PipeTransform } from "@angular/core";
import { NgControl, NgModel, ValidationErrors } from "@angular/forms";

export function getErrorText(err: ValidationErrors): string {

  if (err["required"]) {
    return 'required';
  } else if (err["email"]) {
    return `Email is not valid`;
  } else if (err["passwordPattern"]) {
    return `Password is not valid`
  } else if (err["usernamePattern"]) {
    return  `Username is not valid`;
  }

  else {
    return `Invalid`;
  }
}

@Pipe({
  name: 'sampleError',
  pure: false
})
export class ValidationErrorPipe implements PipeTransform {
  transform(ngControl: NgControl): string {
    return ngControl.errors ? getErrorText(ngControl.errors) : '';
  }
}
