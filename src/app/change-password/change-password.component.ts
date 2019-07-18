import { PasswordValidators } from './password.validators';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordValidators } from '../signup-form/password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent { 

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: PasswordValidators.matchPassword });
  }


  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
