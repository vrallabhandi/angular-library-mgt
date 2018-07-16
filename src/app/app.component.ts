import { Component } from '@angular/core';
import { Book } from './models/book.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<div>{{title}}</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'world of Angular';
  book1: Book =
  {
    code: "B001",
    author: "AAAA",
    name: "C++",
    thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.jpg"
  } 

  book2: Book =
  {
    code: "B002",
    author: "Data Structures Using C",
    name: "C++",
    thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.jpg"
  } 
}
