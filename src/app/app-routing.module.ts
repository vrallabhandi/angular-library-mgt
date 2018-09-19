import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { LoginReactiveComponent } from "./login-reactive/login-reactive.component";
import { HomeComponent } from "./home/home/home.component";
import { ContactusComponent } from "./contact/contactus/contactus.component";
import { SelectedBookComponent } from "./selected-book/selected-book.component";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch:"full"},
    { path: "login", component: LoginReactiveComponent},
    { path: "Register", component: RegistrationComponent},
    { path: "home", component: HomeComponent},
    { path: "contact", component: ContactusComponent},
    { path: "bookstore", loadChildren: './books/books.module#BooksModule'},
    { path: "selectedbook/:author/:code/:name", component: SelectedBookComponent},
    { path: "**", redirectTo: "home", pathMatch:"full"},
  ];

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