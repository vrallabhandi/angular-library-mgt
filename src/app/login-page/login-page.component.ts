import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.loginForm);
  }

  onSubmit() {
    const loginObj = this.loginForm.value;
    console.log(this.loginForm);
    if (loginObj.uname === 'test' && loginObj.password === 'test') {
      this.router.navigate(['/home']);
    }
  }

}
