import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-elemnt/hover-element.directive';
import { BooksService } from './services/books.service';
import { Routes, RouterModule} from '@angular/router'
import * as _ from 'lodash';
import { TreeviewModule } from 'ngx-treeview';
import { TooltipModule } from 'ngx-tooltip';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { AppInterceptor } from './services/app.interceptor';
import { InvalidNameDirective } from './directives/invalid-name/invalid-name.directive';

const routes : Routes = [
 { path:"", redirectTo: "home", pathMatch:"full"},
 { path:"home", component: HomeComponent },
 { path:"bookslist", component: BooksListComponent },
 { path:"bookdetails/:code", component: BookDetailsComponent },
 { path:"contact", component: ContactusComponent },
 { path:"login", component: LoginPageComponent },
 { path:"login2", component: LoginReactiveComponent },
 { path:"register", component: RegistrationPageComponent },
 { path: '*', redirectTo:"home"}
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective,
    ShortenPipe,
    FilterPipe,
    HomeComponent,
    ContactusComponent,
    BooksListComponent,
    BookDetailsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    LoginReactiveComponent,
    InvalidNameDirective
  ],
  imports: [
    BrowserModule,
    TreeviewModule.forRoot(),
    TooltipModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [
    BookService,
    BooksService,
    FilterPipe,
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
