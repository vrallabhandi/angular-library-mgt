import { Component, OnInit } from '@angular/core';

import { Book } from '../../_models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  selectedBook: Book;
  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getAllBooks();
  }

  onSelected(book: Book) {
    this.selectedBook = book;
  }

}
