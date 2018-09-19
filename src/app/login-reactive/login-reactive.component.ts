import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required])
    }, { Validators: [identityRevealedValidator] });
  }

  login() {
    console.log(this.loginForm);

    const loginObj = this.loginForm.value;
    if (loginObj.username === 'test' && loginObj.password === 'test') {
      this.router.navigate(['/home']);
    }
  }
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const uname = control.get('username');
  return uname.value.length < 3 ? { 'validated': true } : null;
};
