import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model'

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styles: []
})
export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[];
  @Output() cocktailSelection: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  pickCocktail(index: number): void {
    console.log(index);
    this.cocktailSelection.emit(index);
  }

}
