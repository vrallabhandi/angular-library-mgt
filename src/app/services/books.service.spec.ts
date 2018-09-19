import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BooksService } from './books.service';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';
import { urls } from '../constants/urls.constant';

describe('BooksService', () => {
  let service: BooksService,
    httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BooksService
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(BooksService);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));

  describe('getBooks', () => {
    it('should make a http request and get the books', () => {
      const booksResp: Book[] = [{
        code: 'C1',
        author: 'A1',
        name: 'Book1',
        thumbnail: 'url'
      }]
      service.getBoooks()
        .subscribe(data => {
          expect(data).toEqual(booksResp);
        })

      const request = httpMock.expectOne(environment.baseUrl + urls.books);
      request.flush(booksResp);
    });
  });
});
