import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../models/book.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Book[], text: string, prop: string): Book[] {
    if (text) {
      return value.filter(book => book[prop].toLowerCase().startsWith(text.toLocaleLowerCase()));
    }
    return value;
  }
}
