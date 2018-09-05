import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn } from '../../../node_modules/@angular/forms';

@Directive({
    selector: '[appName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }]
})
export class NameValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return userNameValidator(control);
    }
}

export const userNameValidator: ValidatorFn = (control: AbstractControl) => {
    return control.value === 'bob' ? { name: 'Name can\'t be Bob' } : null;
};
