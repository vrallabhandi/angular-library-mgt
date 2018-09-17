import { Book } from "../models/book.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { environment } from "../../environments/environment";
import 'rxjs/add/operator/map';
import { urls } from "../constants/urls.constant";
import { Observer } from "rxjs/Observer";

@Injectable()
export class BooksService {

  private books: Book[] = [{
    code: 'B001',
    name: 'PROGRAMMING WITH JAVA',
    thumbnail: '../../assets/PROGRAMMING WITH JAVA.JPG',
    author: 'Rohit Khurana'
  }, {
    code: 'B002',
    name: 'PROGRAMMING IN C AND DATA STRUCTURES',
    thumbnail: '../../assets/PROGRAMMING IN C.JPG',
    author: 'DR. CHANDRAKANT NAIKODI'
  }]
  constructor(
    private http: HttpClient
  ) { }

  // getBooks(): Observable<Book[]>{
  //   return Observable.of(this.books);
  //   //return this.books;
  // }

  getBooks(): Observable<Book[]> {
    return this.http.get(urls.books)
      .map(data => {
        const books: Book[] = (<Book[]>data)
          .sort((a: Book, b: Book) => a.name > b.name ? 1 : -1);

        return books;
      }
      )
  };

  getNameString() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve('This is my data');
        }, 2000);
      }
    );
  }

  getTimeObservable(): Observable<Date>{
    console.log('called time');
    return Observable.create(
      (observer: Observer<Date>) => {
        const interval = setInterval(() =>{
          observer.next(new Date());
          // observer.error(new Error('Time Error'));
        }, 1000);

        setTimeout(() => {
          clearInterval(interval);
          observer.complete();
        }, 10000)
      }
    )
  }
}
