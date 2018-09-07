import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { Book } from './models/book.model';
// import { BooksService } from './services/books.service';
// import { FilterPipe } from './pipes/filter/filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   filterText: string;
//   @ViewChild('bName') bookName: ElementRef;
//   name: string = 'default value'
//   selectedBook: Book;
//   books: any;
//   allbooks: any;

//   constructor(
//     private booksService: BooksService,
//     private filterPipe: FilterPipe
//   ) { }

  ngOnInit() {
    // this.booksService.getBooks()
    //   .subscribe(
    //     (books: Book[]) => {
    //       this.books = books;
    //       this.allbooks = books;
    //     }, (err: any) => {
    //       console.log(err);
    //     })
  };

//   OnBookSelected(data: Book) {
//     this.selectedBook = data;
//     console.log(this.bookName.nativeElement.value);
//   }

//   checkName(element: HTMLInputElement) {
//     console.log(element.value);
//   }

//   filterBooks() {
//     this.books = this.filterPipe.transform(this.allbooks, this.filterText, 'name');
//   }

//   addBook() {
//     const book = <Book> {
//       code: 'B002',
//       author: 'E Balaguruswamy',
//       name: 'DATA STRUCTURES USING C',
//       thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg',
//     }
//     this.books.push(book);
//   }
}