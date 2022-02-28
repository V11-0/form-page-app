import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  appForm!: FormGroup;

  // Validators variables
  emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  registerFinished = false;

  ngOnInit(): void {
    this.appForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, this.emailValidator.bind(this)]),
      'password': new FormControl(null, Validators.required),
      'passwordConfirm': new FormControl(null, [Validators.required]),
    },
    this.samePasswordValidator);
  }

  onSubmit(): void {
    this.registerFinished = true;

    setTimeout(() => location.reload(), 2000);
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    let isEmailValid = this.emailRegex.test(control.value);

    return isEmailValid ? null : { isEmailInvalid: true };
  }

  samePasswordValidator(control: AbstractControl): ValidationErrors | null {
    return control.get('password')?.value !== control.get('passwordConfirm')?.value ? { passwordsNotEqual: true } : null;
  }
}
