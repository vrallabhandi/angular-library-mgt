// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-books-list',
//   templateUrl: './books-list.component.html',
//   styleUrls: ['./books-list.component.css']
// })
// export class BooksListComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { TreeviewItem } from 'ngx-treeview';
import { FilterPipe } from '../pipes/filter/filter.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @ViewChild('bName') bookName: ElementRef;
  name: string = 'default value';
  selectedBook: Book;
  books: any;
  allBooks: Book[];
  mydata:TreeviewItem[] = [];

  date: Date;
  filterText: string;
  
  constructor(
    private booksService: BooksService,
    private filterPipe: FilterPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.date = new Date('08-08-2018');
    this.booksService.getBooks()
      .subscribe(
        (books: Book[]) => {
          this.books = books;
          this.allBooks = books;
          console.log(this.books);
        }, (err: any) => {
          console.log(err);
        }
      );

      let item = new TreeviewItem({
        text: 'IT', value: 9, children: [
            {
                text: 'Programming', value: 91, children: [{
                    text: 'Frontend', value: 911, children: [
                        { text: 'Angular 1', value: 9111 },
                        { text: 'Angular 2', value: 9112 },
                        { text: 'ReactJS', value: 9113 }
                    ]
                }, {
                    text: 'Backend', value: 912, children: [
                        { text: 'C#', value: 9121 },
                        { text: 'Java', value: 9122 },
                        { text: 'Python', value: 9123, checked: false }
                    ]
                }]
            },
            {
                text: 'Networking', value: 92, children: [
                    { text: 'Internet', value: 921 },
                    { text: 'Security', value: 922 }
                ]
            }
        ]
     });
  
     this.mydata.push(item);
  }

  onBookSelected(data: Book) {
    // console.log(data);
    //this.selectedBook = data;
    // console.log(this.bookName.nativeElement.value);
    // this.bookName.nativeElement.value = 'Some new value';

    this.router.navigate(['/bookdetails',data.code]);
  }

  checkName(element : HTMLInputElement) {
    console.log(element.value);
  }

  filterBooks() {
    this.books = this.filterPipe.transform(this.allBooks, this.filterText, 'name');
  }
}



