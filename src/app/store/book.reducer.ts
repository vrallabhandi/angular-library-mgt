import * as bookActions from "./book.action";
import { Book } from "../models/book.model";

export interface State {
  books: Book[];
}

const initialState: State = {
  books: []
};
export function BooksReducer(
  state = initialState,
  actions: bookActions.BookActions
) {
  switch (actions.type) {
    case bookActions.LOAD_BOOKS_Success: {
      return (state = {
        books: actions.payload
      });
    }

    default:
      return state;
  }
}