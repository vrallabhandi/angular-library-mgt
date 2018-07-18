import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [{
    code : 'B001',
    author: 'Rajesh K Shukla',
    name: 'Object Oriented Programming with C++',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51bnZOatz9L._SX379_BO1,204,203,200_.jpg'
  }, {
    code : 'B002',
    author: 'E Balagurusamy',
    name: 'Data structures using C',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg'
  }];
}
