import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, hasMinLength]),
      password: new FormControl([""], [Validators.required])
    });
  }

  

  login() {

  }

}

export function hasMinLength(input: FormControl) {
  const hasMinLength = input.value.length >= 3;
  return hasMinLength ? null : { customminlength: true };
}
