import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PanierService {
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);

  constructor() { }

  addIngredientsToPanier(ingredientsToAdd: Ingredient[]): void {
    const currentPanier = this.panier.value;
    if (currentPanier.length) {
      this.panier.next(currentPanier.concat(ingredientsToAdd));
    } else {
      this.panier.next(ingredientsToAdd);
    }
  }
}
