import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../models/book.model';
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
    this.author = this._activatedRoute.snapshot.params["author"];
    this.code = this._activatedRoute.snapshot.params["code"];
    this.name = this._activatedRoute.snapshot.params["name"];
  }

  ngOnChanges(change: SimpleChanges) {
    const book = change['book'].currentValue;
    this.className = {'blue': book.code === 'B001', 'green':book.code === 'B002'};
  }
}
