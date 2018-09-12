import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { invalidNameValidator } from '../../registration-page/registration-page.component';

@Directive({
  selector: '[appInvalidName]',
  providers: [{provide: NG_VALIDATORS, useExisting: InvalidNameDirective, multi: true}]
})
export class InvalidNameDirective implements Validator {
  @Input('appInvalidName') invalidName: string;
 
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.invalidName ? invalidNameValidator(new RegExp(this.invalidName, 'i'))(control)
                              : null;
  }
}
