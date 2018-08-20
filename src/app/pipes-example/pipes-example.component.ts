import { BooksService } from '../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
data: string;
date= this.booksService.getTimeObservable();

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    // this.booksService.getNameString()
    // .then((name: string) => {
    //   this.data = name;
    // })

    // this.booksService.getTimeObservable()
    // .subscribe(
    //   (date: Date) => {
    //     console.log(date);
    //   },
    //   (err) => {
    //     console.error(err)
    //   },
    //   () => {
    //     console.log('completed')
    //   }
    // );
  }

}
