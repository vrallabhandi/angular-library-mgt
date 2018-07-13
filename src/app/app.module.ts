import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SelectedBookNameDirective } from './directives/selected-book-name.directive';
import { HoverElementDirective } from './directives/hover-element.directive';
import { BooksService } from './services/books.service';
import { environment } from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookDetailsComponent,
    SelectedBookNameDirective,
    HoverElementDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
