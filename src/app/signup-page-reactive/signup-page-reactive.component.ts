import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { CustomValidators } from '../Common/CustomValidator/CustomValidator';

@Component({
  selector: 'app-signup-page-reactive',
  templateUrl: './signup-page-reactive.component.html',
  styleUrls: ['./signup-page-reactive.component.css']
})
export class SignupPageReactiveComponent implements OnInit {

  signupForm: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['',[Validators.required]],
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      telephone: ['',[Validators.required]]
    },
    {
      validator: CustomValidators.validatePasswordAndConfirmPassword
    }
  );
  }

  onSubmit(){

  }
}
