import { PasswordValidators } from './password.validators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit { 

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.doesNotMatch),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  oldPasswordCheck(oldPassword: FormControl) {
  }

  newPasswordCheck(newPassword: FormControl) {
  }

  confirmPasswordCheck(confirmPassword: FormControl) {
    if (confirmPassword.value == this.newPassword.value) {
      console.log("match!");
    }
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

  constructor() { }

  ngOnInit() {
  }

}
