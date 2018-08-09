import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SelectedBookNameDirective } from './directives/selected-book-name.directive';
import { HoverElementDirective } from './directives/hover-element.directive';
import { BooksService } from './services/books.service';
import { BookFilterPipe } from './pipes/book-filter/book-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookDetailsComponent,
    SelectedBookNameDirective,
    HoverElementDirective,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BooksService,
    BookFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
