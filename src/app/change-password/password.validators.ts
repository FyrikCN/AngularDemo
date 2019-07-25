import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidators {
    static doesNotMatch(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== "1234")
                    resolve ({doesNotMatch: true});
                else
                    resolve (null);
            }, 1000)
        });
    }

    static validPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if (control.value !== "1234")
                resolve ({ invalidPassword: true});
            else
                resolve (null);
        })
    }

    static matchPassword(control: AbstractControl) : ValidationErrors | null {
        if (control.get('newPassword').value != control.get('confirmPassword').value)
            return { doNotMatch: true };
        return null;
    }
}