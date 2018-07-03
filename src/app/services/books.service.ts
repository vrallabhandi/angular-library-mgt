import { Injectable } from '@angular/core';

import { Book } from '../../_models/book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const BOOKS: Book[] = [{
    code: 'B001',
    name: 'Object Oriented Programming with C++',
    thumbnail: 'http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.JPG',
    author: 'Rohit Khurana'
}, {
    code: 'B002',
    name: 'Data Structures using C',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg',
    author: 'E Balaguruswamy'
}];

@Injectable()
export class BooksService {
    getAllBooks(): Observable<Book[]> {
        return Observable.of(BOOKS.slice());
    }
}
