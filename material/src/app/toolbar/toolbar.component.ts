import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [`
    .toolbar-content {
      flex:1 1 auto;
    }

    mat-grid-list {
      width:100%;
    }

    mat-grid-tile {
      background:orange;
    }
  `]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
