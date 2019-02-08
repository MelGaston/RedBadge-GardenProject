import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

import {User} from "../user";
import { Product } from '../models/product.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  users: User[];
  products: Product[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  viewSwapper() {
    document.getElementById("delete").style.display="block";
    document.getElementById("login").style.display="none";
  }

  postLogin(email: string, password: string): void{
    event.preventDefault();
    let userInfo = new User();
    userInfo.email = email;
    userInfo.password = password;
    
    this.apiService.postLogin(userInfo)
    .subscribe(
      // user => { this.users.push(user);}
    )
    this.viewSwapper();
  }

  deleteProducts(product:number):void {
    event.preventDefault();
    console.log(product);
    this.apiService.deleteProduct(product).subscribe();
  }

}
