import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

import {User} from "../user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  users: User[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  postLogin(email: string, password: string): void{
    event.preventDefault();
    let userInfo = new User();
    userInfo.email = email;
    userInfo.password = password;

    this.apiService.postLogin(userInfo)
    .subscribe(user => {
      this.users.push(user);
    })
  }
}
