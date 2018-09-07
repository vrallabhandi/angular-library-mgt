import { Book } from '../models/book.model';
import * as bookActions from './book.action';


export const initState: Book = {
    author: 'test',
    name: 'name',
    code: 'code',
    thumbnail: ''
}

export function BooksReducer(state:any,actions: bookActions.BookActions){
    
        switch(actions.type){
            case bookActions.LOAD_BOOKS_Success: {
                return (state = actions.payload)
            }

            default:
                return state;
        }
}