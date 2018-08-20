import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-element/hover-element.directive';
import { BooksService } from './services/books.service';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactusComponent },
  { path: "**", redirectTo: "home" }
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective,
    ShortenPipe,
    FilterPipe,
    PipesExampleComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BooksService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
