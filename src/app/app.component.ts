import { Component } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  books: Book[] = [
    {code: 'B001',
    name: 'PROGRAMMING WITH JAVA',
    thumbnail: '../../assets/GoogleGirl.jpeg',
    author: 'Rohit Khurana' },
    {code: 'B001',
    name: 'PROGRAMMING WITH JAVA',
    thumbnail: '../../assets/GoogleGirl.jpeg',
    author: 'Rohit Khurana'}
  ];
}
