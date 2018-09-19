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
  // selectedBook: Book;
  // @ViewChild('bName') bookName: ElementRef;
  // name: string = "default test";
  // books : Book[];
  // allBooks: Book[];

  // date: Date;
  // filterText: string;

  

  constructor(
    private booksService: BooksService,
    private filterPipe: FilterPipe
  ) { }
  //booksService: BooksService = new BooksService(); other way of calling service but in this way we are not really using any angular
  //that's why use dependency injection

  ngOnInit() {
    // //this.books = this.booksService.getBooks();
    // this.date = new Date('08-08-2018');
    // this.booksService.getBoooks()
    // .subscribe(
    //   (books: Book[]) => {
    //     this.books = books;
    //     this.allBooks = books;
    //   }, (err: any) => {
    //     console.log(err);
    //   }
    // );
  }

  // onBookSelected(data: Book) {
  //   this.selectedBook = data;
  //   //console.log(data);
  //   // console.log(this.bookName.nativeElement.value);
  //   //this.bookName.nativeElement.value ="some other value";
  // }

  // addBook(){
  //   const book =<Book>{
  //     code: 'B002',
  //   author: 'E Balagurusamy',
  //   name: 'Data structures using C',
  //   thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg'
  //   }
  //   this.books.push(book);
  // }

  // checkNames(element: HTMLInputElement) {
  //   console.log(element.value);
  // }

  // filterBooks() {
  //   this.books = this.filterPipe.transform(this.allBooks, this.filterText, 'name');
  // }
}
