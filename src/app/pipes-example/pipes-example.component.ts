import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  // data : string;

  data = this.booksService.getNameString();

  time = this.booksService.getTimeObservable();

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
    // this.booksService.getNameString()
    //   .then((name: string) => {
    //     this.data = name;
    //   })

    // this.booksService.getTimeObservable()
    //   .subscribe((date: Date) => {
    //     console.log(date);
    //   }, (err) => {
    //     console.log(err);
    //   }, () => {
    //     console.log('completed');
    //   });
  }

}
