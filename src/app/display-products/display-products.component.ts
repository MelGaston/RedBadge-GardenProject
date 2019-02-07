import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  public _product = {};
  
  ngOnInit() {
  }

  @Input() set product(product: any) {
    this._product = product;
  }

  get product(): any {
    return this._product;
  }

}
