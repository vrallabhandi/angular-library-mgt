import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Book } from './models/book.model';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { City } from './models/city.model';
import { BooksService } from './services/books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('bName') bookName: ElementRef;
  name: string = 'default value'
  selectedBook: Book;
  selectedCountry: Country;
  selectedState: State;
  selectedCity: City;
  books: any;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks()
    .subscribe(
      (books: Book[]) => {
        this.books = books;
      }, (err: any) => {
        console.log(err);
      })
      };   
    
  
  countries: Country[] = [
    { name: "USA" },
    { name: "India" }    
  ];

  states: State[] = [
    { name: "California", countrtName: "USA" },
    { name: "Florida", countrtName: "USA" },
    { name: "Telangana", countrtName: "India" },
    { name: "Andhra Pradesh", countrtName: "India"}
  ];

  cities: City[] = [
    { name: "Los Angeles", statetName: "California"},
    { name: "San Francisco", statetName: "California"},
    { name: "Miami", statetName: "Florida"},
    { name: "Tampa", statetName: "Florida"},
    { name: "Hyderabad", statetName: "Telangana"},
    { name: "Secundrabad", statetName: "Telangana"},
    { name: "Vijayawada", statetName: "Andhra Pradesh"},
    { name: "Vizag", statetName: "Andhra Pradesh"}
  ]

 

  OnBookSelected(data: Book) {    
    this.selectedBook = data;
    console.log(this.bookName.nativeElement.value);
  }

  checkName(element: HTMLInputElement) {
    console.log(element.value);
  }

  OnCountrySelected(data: Country) {
    this.selectedCountry = data;
    console.log(data.name);
  }

  OnStateSelected(data: State) {
    this.selectedState = data;
    console.log(data.name);
  }

  OnCitySelected(data: City) {
    this.selectedCity = data;
    console.log(data.name);
  }
}