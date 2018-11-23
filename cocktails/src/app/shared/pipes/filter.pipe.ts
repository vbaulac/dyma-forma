import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search:string): Cocktail[] | null {
    if (!search.length)
      return cocktails;

    return cocktails.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));    
  }

}
