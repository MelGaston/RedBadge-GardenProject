import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postLogin(email: string, password: string): void{
    event.preventDefault();
    console.log("this works " + " " + email + " " + password)
  }

}
