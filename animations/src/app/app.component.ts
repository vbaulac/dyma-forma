import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('square', [
      state('normal', style({
        background: 'transparent',
        border: '2px solid black',
        borderRadius: '0px'
      })),
      state('wild', style({
        background: 'red',
        border: '2px solid black',
        borderRadius: '100px',
      
      })),
      // transition('normal => wild', animate(300)),
      // transition('normal <=> wild', animate(300)), WILD CARD : '*'
      // transition('void => *', animate(300)), 
      // transition(':enter', animate(300)), ALIAS TO void => *
      // transition(':leave', animate(300)), // leave
      // void : si l'element n'est pas sur le dom (création)
      // transition('wild => normal', animate(1000))
      // transition('* <=> *', animate('1s 400ms ease-in')),
      // transition(':enter', [
      //   style({
      //     background: 'yellow'
      //   }),
      //   animate('1s 200ms ease-in')
      // ]),
      // transition('normal => wild', animate(1400, keyframes([
      //   style({ background: 'yellow', offset:0}),
      //   style({ background: 'green', offset:0.2}),
      //   style({ background: 'purple', offset:0.4}),
      //   style({ background: 'teal', offset:0.6}),
      //   style({ background: 'orange', offset:0.8})
      // ])))
      transition('normal => wild', group([
          animate(200, style({ background: 'red'})),
          animate(800, style({ borderRadius: '100px'}))
      ]))
    ])
  ]
})
export class AppComponent {
  title = 'animations';
  public currentState: string = 'normal';
}
