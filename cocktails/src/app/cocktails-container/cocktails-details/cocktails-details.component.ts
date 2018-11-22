import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styles: []
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  public index: number;
  
  constructor(private cocktailService: CocktailService, 
              private panierService: PanierService, 
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = params.index ? params.index : 0;
      this.cocktail = this.cocktailService.getCocktail(this.index);
      // this.cocktail = params.index ? this.cocktailService.getCocktail(params.index) : this.cocktailService.getCocktail(0);
    })
  }

  addToPanier(cocktailsIngredients: Ingredient[]): void {
    this.panierService.addIngredientsToPanier(cocktailsIngredients);
  }

  getUrl(): string[] {
    return ['/cocktails', this.index + '', 'edit'];
  }
}
