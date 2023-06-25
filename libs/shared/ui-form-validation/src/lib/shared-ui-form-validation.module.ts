import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationErrorPipe } from './validation-error.pipe';
import { EmailValidatorDirective } from './validators/email/email-validator.directive';
import { PasswordPatternDirective } from './validators/password/password-pattern.directive';
import { UsernamePatternDirective } from './validators/username/username.directive';

const DECLARES = [
  ValidationErrorPipe,
  EmailValidatorDirective,
  PasswordPatternDirective,
  UsernamePatternDirective
]


@NgModule({
  imports: [CommonModule],
  declarations: DECLARES,
  exports: DECLARES,
})
export class SharedUiFormValidationModule {}
