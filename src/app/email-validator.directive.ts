import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {

  emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  validate(control: AbstractControl): ValidationErrors | null {
    let isEmailValid = this.emailRegex.test(control.value);

    if (!isEmailValid) {
      return { isEmailInvalid: true }
    }

    return null;
  }
}
