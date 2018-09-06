import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NameValidatorDirective } from './validators/username.directive';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookDetailsComponent,
    SelectedBookNameDirective,
    HoverElementDirective,
    BookFilterPipe,
    ShortenPipe,
    LoginPageComponent,
    HomePageComponent,
    NameValidatorDirective,
    SignupPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    BooksService,
    BookFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
