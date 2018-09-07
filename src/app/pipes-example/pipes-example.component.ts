import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  data = this.bookService.getNameString();
  date = this.bookService.getTimeObservable();

  ngOnInit() {
    // this.bookService.getNameString()
    // .then((name: string) => {
    //   this.data = name;
    // })  

    // this.bookService.getTimeObservable()
    // .subscribe(
    //   (date: Date) => {
    //     console.log(date);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('completed')
    //   }
    // );
  }

}
