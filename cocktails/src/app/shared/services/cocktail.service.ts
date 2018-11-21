import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';

@Injectable()
export class CocktailService {
  public initCocktails: Cocktail[] = [
    new Cocktail('Mojito', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', "Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910."),
    new Cocktail('Margarita', 'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg', "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila." ),
    new Cocktail('Sour', 'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', "Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d'Amérique . C'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l'eau gazeuse à ceci le transforme en un gin fizz .")
  ];

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(this.initCocktails);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }

  selectCocktail(index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }
}
