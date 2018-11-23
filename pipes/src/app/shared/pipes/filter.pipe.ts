import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], search: string = ''): any {
    return value.filter(name => name.toLowerCase().includes(search));
  }

}
