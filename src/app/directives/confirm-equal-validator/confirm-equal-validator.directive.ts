import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormControl } from '../../../../node_modules/@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator{
  //@Input() appConfirmEqualValidator: string

  validate(passwordGroup: AbstractControl): {[key:string]:any}|null{
    const passwordField = passwordGroup.get('password');
    const confirmPasswordField = passwordGroup.get('confirmPassword');
    if(passwordField && confirmPasswordField && passwordField.value != confirmPasswordField.value) {
      return {'notEqual':true};
    }
    return null;
  }
  
  constructor() { }

}
