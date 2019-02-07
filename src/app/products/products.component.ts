import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private dbService: DatabaseService) {

  }

  ngOnInit() {
    this.findProducts();
  }

  findProducts() : void {
    this.dbService.getProducts().subscribe(Products => {
      this.products = Products;
      this.products.reverse();
    })
  }

}
