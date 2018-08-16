import { TestBed, async, inject } from '@angular/core/testing';
import {
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../models/book.model';

fdescribe('BooksService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        BooksService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  describe('getBooks()', () => {

    it('should return an Observable<Array<Video>>',
      inject([BooksService, XHRBackend], (booksService, mockBackend) => {

        const mockResponse = {
          data: [
            {
              code: "B001",
              author: "Rohit",
              name: "C++",
              thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.jpg"
            },
            {
              code: "B002",
              author: "Lee Chao",
              name: "Networking",
              thumbnail: "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9781420091595.jpg"
            }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        booksService.getBooks().subscribe((videos) => {
          expect(videos.length).toBe(2);
          expect(videos[0].name).toEqual('Video 0');
          expect(videos[1].name).toEqual('Video 1');          
        });

      }));
  });
});