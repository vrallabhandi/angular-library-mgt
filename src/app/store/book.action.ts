import {  Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export const LOAD_BOOKS = 'Load Books';
export const LOAD_BOOKS_Success = 'Load Books - Success';
export const LOAD_BOOKS_Failure = 'Load Books - Failure';

export class LoadBooks implements Action {
    readonly type = LOAD_BOOKS;
}

export class LoadBooksSuccess implements Action {
    readonly type = LOAD_BOOKS_Success;
    constructor(public payload: Book[]){}
}

export class LoadBooksFailure implements Action {
    readonly type = LOAD_BOOKS_Failure;

    constructor(public payload:any){}
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure;