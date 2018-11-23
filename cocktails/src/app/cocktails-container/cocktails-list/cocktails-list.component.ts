import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model'
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styles: [],
  providers: [FilterPipe]
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public search: string = '';

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => this.cocktails = cocktails);
  }
}
