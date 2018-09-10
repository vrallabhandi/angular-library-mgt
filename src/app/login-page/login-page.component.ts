import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    const loginObj = loginForm.value;
    if(loginObj.email === 'test' && loginObj.password === 'test') {
      this._route.navigate(['/home'])
    }
  }
}
