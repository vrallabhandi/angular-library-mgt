import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// import { HttpClientModule } from '@angular/common/http'

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksService } from './services/books.service';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { AppRoutingModule } from './app-routing.module';
// import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    LoginPageComponent,
    RegistrationComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
    // ,BooksModule
  ],
  providers: [BooksService, FilterPipe], // Added FilterPipe for DI
  bootstrap: [AppComponent]
})
export class AppModule { }
