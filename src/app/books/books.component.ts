import { Component, OnInit } from '@angular/core';

import { Book } from '../../_models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book = {
    code: 'B001',
    name: 'Book 1',
    thumbnail: 'http://flavorwire.files.wordpress.com/2012/08/stand.jpg',
    author: 'Author 1'
  };
  constructor() { }

  ngOnInit() {
  }

}
