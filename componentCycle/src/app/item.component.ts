import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';
import { TrustedStyleString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-item',
  template: `
    <p>
      {{ data }}
    </p>
  `,
  styles: []
})
export class ItemComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('') public data: string;

  constructor() { 
    console.log("Constructior : ", this.data);
  }

  ngOnChanges(simpleChange) {
    console.log("ngOnChange");
    console.log("On Changes : ", this.data);
  }

  ngOnInit() {
    console.log("On Init : ", this.data);
  }

  ngDoCheck()
  {
    console.log("Do check : ", this.data);
  }

  ngAfterContentInit()
  {
    console.log(" ngAfterContentInit : ", this.data);
  }

  ngAfterContentChecked()
  {
    console.log(" ngAAfterContentInit : ", this.data);
  }

  ngAfterViewInit()
  {
    console.log(" AfterViewInit : ", this.data);
  }

  ngAfterViewChecked()
  {
    console.log(" AfterViewChecked : ", this.data);
  }

  ngOnDestroy()
  {
    console.log(" OnDestroy : ", this.data);
  }

}
