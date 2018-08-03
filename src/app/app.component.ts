import { Component, ElementRef, ViewChild } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('bName') bookName: ElementRef;
  selectedBook: Book;
  name: string = 'default value';
  books: Book[] = [{
    code: 'B001',
    name: 'PROGRAMMING WITH JAVA',
    thumbnail: '../../assets/PROGRAMMING WITH JAVA.JPG',
    author: 'Rohit Khurana'
  }, {
    code: 'B002',
    name: 'PROGRAMMING IN C AND DATA STRUCTURES',
    thumbnail: '../../assets/PROGRAMMING IN C.JPG',
    author: 'DR. CHANDRAKANT NAIKODI'
  }];

  onBookSelected(data: Book){
    this.selectedBook = data;
    //console.log(data);
    // console.log(this.bookName.nativeElement.value);
  }

  checkName(element: HTMLInputElement){
    console.log(element.value);
  }
}
