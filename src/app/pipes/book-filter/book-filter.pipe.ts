import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../../_models/book.model';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], text: string): Book[] {
    if (text) {
      return books.filter(book => book.name.toLowerCase().startsWith(text.toLowerCase()));
    }
    return books;
  }

}
