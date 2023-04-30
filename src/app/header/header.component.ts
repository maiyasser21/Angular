import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import 'bootstrap';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})



export class HeaderComponent implements OnInit {
  textId:string="myId2";
  @ViewChild(ProductsComponent) storeName:ProductsComponent;
  constructor() { }

  ngOnInit(): void {

  }

}
