import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styles: []
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [];

  private panierSubscribtion: Subscription;

  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.panierSubscribtion = this.panierService.panier.subscribe((panier: Ingredient[]) => this.ingredients = panier);
  }

  ngOnDestroy() {
    this.panierSubscribtion.unsubscribe();
  }

}
