import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  animations: [
    trigger('nav', [
      state('show', style({
        width:'200px',
        background: 'red'       
      })),
      state('hide', style({
        width:'0px',
        background: 'blue'
      })),
      transition('show <=> hide', animate('300ms ease-in'))
    ])
  ]
})
export class ToggleComponent implements OnInit {
  public state: string = 'show';

  public changeState() {
    console.log(this.state);
    this.state = (this.state === 'show') ? 'hide' : 'show';
    console.log(this.state);
  }

  constructor() { }

  ngOnInit() {
  }

}
