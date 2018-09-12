import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, AbstractControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { InvalidNameDirective } from '../directives/invalid-name/invalid-name.directive';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
  providers: [{provide: NG_VALIDATORS, useExisting: InvalidNameDirective, multi: true}]
})
export class RegistrationPageComponent implements OnInit {
  username:string="";
  constructor(private router : Router) { }


  ngOnInit() {
  }

  onSubmit(loginForm : NgForm){
    debugger;
    const loginObj = loginForm.value;

    if(!loginForm.valid){
      alert('form is invalid');
    }
    else{
      this.router.navigate(['/home']);
    }
  }
}


export function invalidNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const invalid = nameRe.test(control.value);
    return invalid ? {'invalidName': {value: control.value}} : null;
  };
}