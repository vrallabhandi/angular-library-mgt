import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
 loginForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
     this.loginForm = this.fb.group({
       username : new FormControl([""], [Validators.required, Validators.minLength(3)]),
       password : new FormControl([""], [Validators.required]),
     });
  }

  login(){
    console.log(this.loginForm);
  }

}
