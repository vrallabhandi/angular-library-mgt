import { Component, OnInit } from '@angular/core';

import { Book } from '../../_models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
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
