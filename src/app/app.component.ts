import { Component } from '@angular/core';
import {Book} from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'world of Angular';
  books: Book[]
  constructor()
  {
  this.books = [
    {
    code:"B001",
    author:"Rohit Khurana",
    name:'Object Oriented Programming with c++',
    thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.JPG"
   },
  {
    code:"B002",
    author:"Suresh Kancham Reddy",
    name:'Cracking the Coding Interview: 189 Programing Questions and Solutions',
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg"
	}]
  }
//  book1: Book = {
//     code:"B001",
//     author:"Rohit Khurana",
//     name:'Object Oriented Programming with c++',
//     thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.JPG"
//   }
//  book2: Book = {
//     code:"B002",
//     author:"Suresh Kancham Reddy",
//     name:'Cracking the Coding Interview: 189 Programing Questions and Solutions',
//     thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg"
// 	}
}
