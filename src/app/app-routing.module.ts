import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { LoginReactiveComponent } from "./login-reactive/login-reactive.component";
import { BooksPageComponent } from "./books/books-page/books-page.component";
import { HomeComponent } from "./home/home/home.component";
import { ContactusComponent } from "./contact/contactus/contactus.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "registration", component: RegistrationComponent },
    // { path: "login", component: LoginPageComponent },
    { path: "login", component: LoginReactiveComponent },
    { path: "books", loadChildren: './books/books.module#BooksModule' },
    { path: "home", component: HomeComponent },
    { path: "contact", component: ContactusComponent },
    { path: "**", redirectTo: "home" }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}