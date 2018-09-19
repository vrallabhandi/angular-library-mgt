import { BooksService } from "./books.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { Book } from "../models/book.model";
import { of } from "rxjs/observable/of";

describe('BooksService', () => {
    let service: BooksService,
        http: HttpClient;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                BooksService
            ]
        });
        service = TestBed.get(BooksService);
        http = TestBed.get(HttpClient);
    });

    fdescribe('getBooks', () => {
        it('should make a http request and get the books', (done: DoneFn) => {
            const booksResp: Book[] = [{
                code: 'C1',
                author: 'A1',
                name: 'Book1',
                thumbnail: 'url'
            }];
            spyOn(http, 'get').and.returnValue(of(booksResp))
            service.getBoooks()
                .subscribe(data => {
                    expect(data).toEqual(booksResp);
                    done();
                })
        });
    });
});