import { FilterPipe } from './filter.pipe';
import { Book } from '../../models/book.model';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  let books: Book[] = [
    { code: "B002", author: "aaa", name: "Object Oriented Programming", thumbnail: "ccc" },
    { code: "B003", author: "aaa", name: "Angular Training", thumbnail: "ccc" }
  ];

  let book: Book[] = [
    { code: "B003", author: "aaa", name: "Angular Training", thumbnail: "ccc" }
  ];

  beforeEach(() => {
    pipe = new FilterPipe();
  });


  it('Should filter books based on the input text on name property', () => {
    expect(pipe.transform(books, 'angular', 'name')).toEqual(book);
  });

  it('Should return all books if input is empty', () => {
    expect(pipe.transform(books, '', 'name')).toEqual(books);
  });

});
