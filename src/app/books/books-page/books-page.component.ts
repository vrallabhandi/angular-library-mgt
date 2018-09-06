import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from '../../models/book.model';
import { FilterPipe } from '../../pipes/filter/filter.pipe';
import { BooksService } from '../../services/books.service';

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
    private booksService: BooksService,
    private filterPipe: FilterPipe
  ) { }
  //booksService: BooksService = new BooksService(); //other way of calling service but in this way we are not really using any angular DI

  ngOnInit() {
    this.date = new Date('08-08-2018');
    this.booksService.getBooks()
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
      thumbnail: '../../assets/PROGRAMMING WITH JAVA.JPG',
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
