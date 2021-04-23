import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as data from '../../../assets/mock-data/user-data.json';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials: any = {};
  users: any = (data as any).default;

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) {
    this.credentials = {
      login: '',
      password: ''
    };
   }

  ngOnInit(): void { }

  logIn(loginForm: NgForm): void {
    if (this.users.findIndex((user: any) => user.password === this.credentials.password && user.login === this.credentials.login) !== -1) {
      sessionStorage.setItem('isLoggedIn', 'yes');
      this.router.navigateByUrl('/home/cart');
    } else {
      sessionStorage.setItem('isLoggedIn', 'no');
      alert('Wrong credentials');
    }
  }
}
