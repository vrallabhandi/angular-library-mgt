import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from '../../models/book.model';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { BooksService } from '../../services/books.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import * as booksActions from "../../store/book.action";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  @ViewChild('bName') bookName: ElementRef;
  selectedBook: Book;
  name: string = 'default value';
  books: Book[];
  allBooks: Book[];

  date: Date;
  filterText: string;

  constructor(
    private store: Store<AppState>,
    private booksService: BooksService,
    private filterPipe: FilterPipe
  ) { }
  //booksService: BooksService = new BooksService(); //other way of calling service but in this way we are not really using any angular DI

  ngOnInit() {
    //this.date = new Date('08-08-2018');
    //this.books$ = this.store.select(store => store.books);
    this.store.dispatch(new booksActions.LoadBooks());
    this.store.select(store => store.books.books)
      .subscribe(
        (books: Book[]) => {
          this.books = books;
          this.allBooks = books.slice();
        }, (err: any) => {
          console.log(err);
        }
      );
  }

  onBookSelected(data: Book) {
    this.selectedBook = data;
    //console.log(data);
    // console.log(this.bookName.nativeElement.value);
  }

  addBook() {
    const book = <Book>{
      code: 'B001',
      name: 'DATA WITH JAVA',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg',
      author: 'Rohit Khurana'
    }
    this.books.push(book);
    this.allBooks.push(book);
  }

  checkName(element: HTMLInputElement) {
    console.log(element.value);
  }

  filterBooks() {
    this.books = this.filterPipe.transform(this.allBooks, this.filterText, 'name');
  }

}
