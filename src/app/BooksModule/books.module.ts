import { Routes, RouterModule } from "../../../node_modules/@angular/router";
import { BookstoreComponent } from "./bookstore/bookstore.component";
import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import { BooksRoutingModule } from "./books-routing.module";
import { BookComponent } from "./book/book.component";
import { FormsModule } from "../../../node_modules/@angular/forms";

 
  @NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        FormsModule           
    ],
    
    declarations: [
        BookstoreComponent,
        BookComponent
    ]
  })

export class BooksModule {}