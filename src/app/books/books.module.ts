
import { NgModule } from "../../../node_modules/@angular/core";
import { BooksRoutingModule } from "./books-routing.module";
import { BookComponent } from "./book/book.component";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { StoreModule } from "../../../node_modules/@ngrx/store";
import { BooksReducer } from "../store/book.reducer";
import { BooksPageComponent } from "./books-page/books-page.component";

import { CommonModule } from "../../../node_modules/@angular/common";
import { BookEffects } from "../store/book.effects";
import { EffectsModule } from "../../../node_modules/@ngrx/effects";

 
@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        FormsModule,
        StoreModule.forRoot({
          books: BooksReducer
        }),
        EffectsModule.forRoot([BookEffects])
    ],
    
    declarations: [
        BooksPageComponent,
        BookComponent
    ]
  })

export class BooksModule {}