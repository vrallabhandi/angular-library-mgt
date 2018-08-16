import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ErrorObservable } from '../../../node_modules/rxjs/observable/ErrorObservable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx'
import { urls } from '../constants/urls.constant';



@Injectable()
export class BooksService {

  constructor(
    private _http: HttpClient
  ) { }

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

  //getBooks(): Observable<any> {
   // return Observable.of(this.books);
    //return new ErrorObservable("error");
  //}

  getBooks(): Observable<Book[]> {
    return this._http.get(environment.baseUrl + urls.books)
    .map(data => {
      const books = (<Book[]>data)
      .sort((a: Book, b: Book) => a.name > b.name? 1: -1);
      return books;
     });
  }
}
