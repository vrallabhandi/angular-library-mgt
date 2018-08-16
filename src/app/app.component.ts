import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';
import { FilterPipe } from './pipes/filter/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  ){}
  //booksService: BooksService = new BooksService(); //other way of calling service but in this way we are not really using any angular DI

  ngOnInit(){
    this.date = new Date('08-08-2018');
    this.booksService.getBooks()
    .subscribe(
      (books: Book[]) => {
        this.books = books;
        this.allBooks = books;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  onBookSelected(data: Book){
    this.selectedBook = data;
    //console.log(data);
    // console.log(this.bookName.nativeElement.value);
  }

  checkName(element: HTMLInputElement){
    console.log(element.value);
  }

  filterBooks(){
    this.books = this.filterPipe.transform(this.allBooks, this.filterText, 'name');
  }
}
