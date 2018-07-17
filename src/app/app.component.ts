import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  }]
}
