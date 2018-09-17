import { Effect, Actions } from "@ngrx/effects";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import { of } from "rxjs/observable/of";
import { switchMap, map, catchError } from "rxjs/operators";
import * as bookActions from "./book.action";
import { BooksService } from "../services/books.service";

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions<bookActions.LoadBooks>,
    private service: BooksService
  ) {}

  @Effect()
  loadBooks$ = this.actions$.ofType(bookActions.LOAD_BOOKS).pipe(
    switchMap(() => {
      return this.service.getBooks().pipe(
        map(data => new bookActions.LoadBooksSuccess(data)),
        catchError(error => of(new bookActions.LoadBooksFailure(error)))
      );
    })
  );
}