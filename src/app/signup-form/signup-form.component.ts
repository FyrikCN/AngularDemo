import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidators } from './password.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup(
    {
      account: new FormGroup({
        username: new FormControl('', 
        [Validators.required,Validators.minLength(3), UsernameValidators.cannotContainSpace], 
        UsernameValidators.shouldBeUnique),
        password: new FormControl('', [Validators.required, passwordValidators.cannotContainDot])
      })
    }
  );

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}
