import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
//import { map } from '../../../node_modules/rxjs/operators';
import 'rxjs/add/operator/map';
import { urls } from '../constants/urls.constant';
import { Observer } from 'rxjs/Rx';

@Injectable()
export class BooksService {

  private books: Book[] = [{
    code: 'B001',
    author: 'Rajesh K Shukla',
    name: 'Object Oriented Programming with C++',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51bnZOatz9L._SX379_BO1,204,203,200_.jpg'
  }, {
    code: 'B002',
    author: 'E Balagurusamy',
    name: 'Data structures using C',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg'
  }]
  constructor(
    private http: HttpClient
  ) { }

  // getBooks(): Observable<Book[]>{
  //   return Observable.of(this.books);
  //   //return this.books;
  // }

  getBoooks(): Observable<Book[]> {
    return this.http.get(environment.baseUrl + urls.books)
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
          resolve('This is my name')
        }, 2000);
      });
  }

  getTimeObervable(): Observable<Date> {
    return Observable.create(
      (observer: Observer<Date>) => {
        const interval = setInterval(() => {
          observer.next(new Date());
        }, 1000);
        setTimeout(() => {
          clearInterval(interval);
          observer.complete();
        }, 10000)
      }
    )
  }
}
