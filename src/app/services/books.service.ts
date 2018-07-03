import { Injectable } from '@angular/core';

import { Book } from '../../_models/book.model';

@Injectable()
export class BooksService {
    getAllBooks(): Book[] {
        return [{
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
    }
}
