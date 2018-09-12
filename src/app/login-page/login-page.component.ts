import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  uname: string;
  upassword: string;
  constructor(private router : Router) { }
  
  ngOnInit() {
  }

  onSubmit(loginForm : NgForm){
    const loginObj = loginForm.value;
    if(loginObj.uname === 'test'  && loginObj.password === 'test'){
      this.router.navigate(['/home']);
    }
  }

}
