import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../assets/mock-data/user-data.json';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login: string = ""
  password: string = ""
  users: any = (data as any).default

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }

  ngOnInit(): void { }

  logIn(): void {
    if (this.users.findIndex((user: any) => user.password === this.password && user.login === this.login) !== -1) {
      sessionStorage.setItem('isLoggedIn', 'yes');
      this.router.navigateByUrl('/home/cart');
    } else {
      sessionStorage.setItem('isLoggedIn', 'no');
    }
  }
}
