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
}