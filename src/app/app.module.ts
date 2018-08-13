import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SelectedBookNameDirective } from './directives/selected-book-name.directive';
import { HoverElementDirective } from './directives/hover-element.directive';
import { BooksService } from './services/books.service';
import { BookFilterPipe } from './pipes/book-filter/book-filter.pipe';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookDetailsComponent,
    SelectedBookNameDirective,
    HoverElementDirective,
    BookFilterPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BooksService,
    BookFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
