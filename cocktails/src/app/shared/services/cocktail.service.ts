import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators'

@Injectable()
export class CocktailService implements OnInit {
  // this is obsolete
  // public initCocktailsBB: Cocktail[] = [
  //   new Cocktail('Mojito', 
  //                'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 
  //                "Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.",
  //                [
  //                  new Ingredient('Rhum', 4),
  //                  new Ingredient('Citron vert', 1),
  //                  new Ingredient('Menthe fraiche', 3)               
  //                ]),
  //   new Cocktail('Margarita', 
  //                'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg', 
  //                "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila.",
  //                 [
  //                   new Ingredient('Tequila', 4),
  //                   new Ingredient('Limonade', 2),
  //                   new Ingredient('Sucre', 9)
  //                 ]),
  //   new Cocktail('Sour', 
  //                'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', 
  //                "Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d'Amérique . C'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l'eau gazeuse à ceci le transforme en un gin fizz .",
  //                [
  //                  new Ingredient('Gin', 4),
  //                  new Ingredient('Citron',1),
  //                  new Ingredient('Sucre',3)
  //                ])
  // ];

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    // one shot just to populate the DB
    // this.http.put('https://httpangular-7ab1f.firebaseio.com/cocktails.json', this.cocktails.value)
    // .subscribe(res => console.log(res));

    this.initCocktails();
   }

   initCocktails(): void {
    this.http.get('https://httpangular-7ab1f.firebaseio.com/cocktails.json').subscribe( (cocktails: Cocktail[]) => this.cocktails.next(cocktails));
   }

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      map((cocktails : Cocktail[]) => cocktails[index])
    );
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(cocktail); //only if same name between model and formGroup
    // cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.desc, cocktail.ingredients.map( ingredient => new Ingredient(ingredient.name, ingredient.quantity))));

    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice(); // slice means copy by value and not copy by reference for arrays
    const index = cocktails.map(c => c.name).indexOf(editCocktail.name);

    let indexBis = cocktails.findIndex(c => c.name === editCocktail.name); // YAY LinQ

    cocktails[index] = editCocktail;

    this.cocktails.next(cocktails);
    this.http.put('https://httpangular-7ab1f.firebaseio.com/cocktails.json', this.cocktails.value).subscribe();    
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
}
