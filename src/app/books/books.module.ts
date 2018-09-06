import { NgModule } from "@angular/core";
import { BooksPageComponent } from "./books-page/books-page.component";
import { BookComponent } from "./book/book.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BooksRoutingModule } from "./books-routing.module";
import { BooksService } from "../services/books.service";
import { PipesExampleComponent } from "../pipes-example/pipes-example.component";
import { SelectedBookComponent } from "../selected-book/selected-book.component";
import { HighlighterDirective } from "../directives/highlighter/highlighter.directive";
import { ShortenPipe } from "../pipes/shorten/shorten.pipe";
import { HoverElementDirective } from "../directives/hover-element/hover-element.directive";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        BooksPageComponent,
        BookComponent,
        PipesExampleComponent,
        SelectedBookComponent,
        HighlighterDirective,
        ShortenPipe,
        HoverElementDirective
    ],
    imports: [
        FormsModule,
        CommonModule,
        BooksRoutingModule,
        HttpClientModule
    ],
    providers: [
        BooksService
    ]
})
export class BooksModule {
}