import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BooksService } from './books.service';
import { urls } from '../constants/urls.constant';
import { environment } from '../../environments/environment.prod';
import { Http } from '../../../node_modules/@angular/http';

const booksResp = [{
    code: 'B1',
    name: 'Book1',
    thumbnail: 'I1',
    author: 'A1'
}, {
    code: 'B2',
    name: 'Book2',
    thumbnail: 'I2',
    author: 'A2'
}];

fdescribe('BooksService', () => {
    let service: BooksService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                BooksService,
                Http
            ]
        });

        service = TestBed.get(BooksService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('#getBooks', () => {
        it('should return an Observable<Book[]>', (done) => {
            service.getAllBooks().subscribe(books => {
                expect(books.length).toBe(2);
                expect(books).toEqual(booksResp);
                done();
            });

            const req = httpMock.expectOne(environment.baseUrl + urls.books);
            expect(req.request.method).toBe('GET');
            req.flush(booksResp);
        });
    });
});
