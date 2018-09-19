import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.css']
})
export class SelectedBookComponent implements OnInit, OnChanges {

 // @Input() book: Book;
 @Input() author: string;
 @Input() code: string;
 @Input() name: string;
  className: any;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.className ={'blue': this.book.code==='B001', 'green': this.book.code ==='B002'}
    this.author = this._activatedRoute.snapshot.params["author"];
    this.code = this._activatedRoute.snapshot.params["code"];
    this.name = this._activatedRoute.snapshot.params["name"];
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes['book']);
    const book = changes['book'].currentValue;
    this.className ={'blue': book.code==='B001', 'green': book.code ==='B002'}
  }
}
