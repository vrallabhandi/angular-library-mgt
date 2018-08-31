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
  loginFailed = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const model = this.loginForm.value;
    this.loginFailed = false;
    if (model.uname === 'test' && model.pwd === 'test') {
      this.router.navigate(['/home/1']);
    } else {
      this.loginFailed = true;
    }
  }

}
