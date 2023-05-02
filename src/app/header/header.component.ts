import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})



export class HeaderComponent implements OnInit {
  textId:string="myId2";
  constructor() { }

  ngOnInit(): void {

  }

}
