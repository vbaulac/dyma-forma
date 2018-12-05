import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myco',
  templateUrl: './myco.component.html',
  styles: []
})
export class MycoComponent implements OnInit {

  public myVar:number;
  constructor() { }

  ngOnInit() {
    this.myVar = 45;
  }

}
