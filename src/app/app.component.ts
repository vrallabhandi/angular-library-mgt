import { Component, OnInit } from '@angular/core';
import { Book } from './models/book.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name: string = 'default value'
  
    books: Book[] = [
      {
        code: "B001",
        author: "Rohit",
        name: "C++",
        thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.jpg"
      },
      {
        code: "B002",
        author: "Lee Chao",
        name: "Networking",
        thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9781420091595.jpg"
      },
      {
        code: "B003",
        author: "Ashok Arora",
        name: "Computer Fundamentals",
        thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325992276.jpg"
      },
      {
        code: "B004",
        author: "Bel",
        name: "Information Security",
        thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9781420078541.jpg"
      }
    ];
  
    OnBookSelected(data: Book) {
      console.log(data);
    }

    checkName(data: any) {
      console.log(this.name);
    }
  }