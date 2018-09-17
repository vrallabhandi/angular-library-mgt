import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-element/hover-element.directive';
import { BooksService } from './services/books.service';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator/confirm-equal-validator.directive';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { SignupPageReactiveComponent } from './signup-page-reactive/signup-page-reactive.component';
import { AppRoutingModule } from './app-routing.module';



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
    SignupPageComponent,
    ConfirmEqualValidatorDirective,
    LoginReactiveComponent,
    SignupPageReactiveComponent
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
