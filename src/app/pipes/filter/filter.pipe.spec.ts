import { FilterPipe } from './filter.pipe';
import { Book } from '../../models/book.model';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  let books: Book[] = [
    { code: "B001", author: "author1", name: "Object Oriented Programming", thumbnail: "t1" },
    { code: "B002", author: "author2", name: "Data Structures", thumbnail: "t2" }
  ];

  let book: Book[] = [
    { code: "B002", author: "author2", name: "Data Structures", thumbnail: "t2" }
  ];

  beforeEach(() => {
    pipe = new FilterPipe();
  });


  it('Should filter books based on the input text on name property', () => {
    expect(pipe.transform(books, 'Data', 'name')).toEqual(book);
  });

  it('Should return all books if input is empty', () => {
    expect(pipe.transform(books, '', 'name')).toEqual(books);
  });
});
