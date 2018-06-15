import { Component, OnInit } from '@angular/core';

import { Book } from '../../_models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [{
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

  selectedBook: Book;
  constructor() { }

  ngOnInit() {
  }

  onSelected(book: Book) {
    this.selectedBook = book;
  }

}
