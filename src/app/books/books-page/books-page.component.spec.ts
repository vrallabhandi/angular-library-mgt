import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPageComponent } from './books-page.component';
import { BooksService } from '../../services/books.service';
import { of } from 'rxjs/observable/of';

class MockBooksService {
  getBooks() {
    return of([])
  }
}

describe('BooksComponent', () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;
  let booksService: BooksService;
  let mockBooksService = new MockBooksService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPageComponent ],
      providers: [
        { provide: BooksService, useValue: mockBooksService }
      ]
    })
    .compileComponents();

    // booksService = TestBed.get(BooksService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
