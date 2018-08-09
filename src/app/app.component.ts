import { Component, ElementRef, ViewChild } from '@angular/core';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('bName') bookName: ElementRef;
  selectedBook: Book;
  name: string = 'default value';
  books: Book[];

  constructor(private booksService: BooksService){}
  //booksService: BooksService = new BooksService(); //other way of calling service but in this way we are not really using any angular DI

  ngOnInit(){
    this.books = this.booksService.getBooks();
  }

  onBookSelected(data: Book){
    this.selectedBook = data;
    //console.log(data);
    // console.log(this.bookName.nativeElement.value);
  }

  checkName(element: HTMLInputElement){
    console.log(element.value);
  }
}
