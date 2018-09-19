import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// import { HttpClientModule } from '@angular/common/http'

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksService } from './services/books.service';
import {CommonModule} from '@angular/common';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { HoverElementDirective } from './directives/hover-element/hover-element.directive';
import { BooksModule } from './books/books.module';
import { BookComponent } from './books/book/book.component';
import { BooksPageComponent } from './books/books-page/books-page.component';

// import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective,
    ShortenPipe,
    FilterPipe,
    PipesExampleComponent,
    HomeComponent,
    ContactusComponent,
    LoginPageComponent,
    LoginReactiveComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [BooksService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
