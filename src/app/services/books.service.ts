import { urls } from '../constants/urls.constants';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

@Injectable()
export class BooksService {
private books: Book[]= [
    {
    code:"B001",
    author:"Rohit Khurana",
    name:'Object Oriented Programming with c++',
    thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.JPG"
   },
  {
    code:"B002",
    author:"Suresh KanchamReddy",
    name:'Cracking the Coding Interview: 189 Programing Questions and Solutions',
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1,204,203,200_.jpg"
	}]

  constructor(
    private http: HttpClient,
    //private bookService: BooksService
  ) { }
  //getBooks(){
    //return this.books;
   // return Observable.of(this.books)
  //}

  // getBooksServer(){
  //   this.http.get(environment.baseUrl + 'books.json')
  //    .subscribe((response) => {
  //      console.log(response);
  //    })
  // }

  getBooks(): Observable<Book[]>{
    return this.http.get(environment.baseUrl + urls.books)
    .map(data => {
      const books = (<Book[]>data)
      .sort((a: Book, b:Book) => a.name > b.name ? 1 : -1);
      return books
    });
  }
}
