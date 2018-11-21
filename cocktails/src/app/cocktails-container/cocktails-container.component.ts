import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: [],
  providers: [CocktailService]
})
export class CocktailsContainerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
