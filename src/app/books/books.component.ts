import { Component, OnInit } from '@angular/core';

import { Book } from '../../_models/book.model';
import { BooksService } from '../services/books.service';
import { BookFilterPipe } from '../pipes/book-filter/book-filter.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  selectedBook: Book;
  searchText: string;

  private allBooks: Book[];
  constructor(
    public booksService: BooksService,
    public bookFilterPipe: BookFilterPipe
  ) { }

  ngOnInit() {
    this.booksService.getAllBooks()
      .subscribe((books: Book[]) => {
        this.books = books;
        this.allBooks = books;
      });
  }

  onSelected(book: Book) {
    this.selectedBook = book;
  }

  filterBooks() {
    this.books = this.bookFilterPipe.transform(this.allBooks, this.searchText);
  }

  addNewBook() {
    this.books.push({
      code: 'CODE',
      name: 'Object Oriented Programming with C++',
      author: 'New book author',
      thumbnail: 'http://via.placeholder.com/200x270'
    });
  }

}
