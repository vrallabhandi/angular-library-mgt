import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { userNameValidator } from '../validators/username.directive';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), userNameValidator]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}[- ]?\d{5}$/)])
    });
  }

  register() {
    console.log(this.signUpForm.value);
    this.router.navigate(['/home']);
  }
}
