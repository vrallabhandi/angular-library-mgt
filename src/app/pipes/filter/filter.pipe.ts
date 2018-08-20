import { Book } from '../../models/book.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Book[], text: string, prop: string = 'name'): Book[] {
    console.log(prop);
    if(text){
      return  value.filter(book => book[prop].toLowerCase().startsWith(text.toLowerCase()));
    }
    return value;
  }

}
