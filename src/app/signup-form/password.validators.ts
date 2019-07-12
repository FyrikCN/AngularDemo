import { AbstractControl, ValidationErrors } from '@angular/forms';

export class passwordValidators {
    static cannotContainDot (control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf('.') >= 0)
            return {cannotContainDot: {
                dotPosition: control.value.indexOf('.')
            }};
        else
            return null;
    }
}