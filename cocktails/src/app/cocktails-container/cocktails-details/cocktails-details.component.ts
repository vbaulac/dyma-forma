import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styles: []
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  
  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe((cocktail: Cocktail) => this.cocktail = cocktail);
  }
}
