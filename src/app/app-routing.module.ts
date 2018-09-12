import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { LoginReactiveComponent } from "./login-reactive/login-reactive.component";
import { SignupPageReactiveComponent } from "./signup-page-reactive/signup-page-reactive.component";
import { HomeComponent } from "./home/home/home.component";
import { ContactusComponent } from "./contact/contactus/contactus.component";
import { SelectedBookComponent } from "./selected-book/selected-book.component";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch:"full"},
    { path: "login", component: LoginReactiveComponent},
    { path: "signup", component: SignupPageReactiveComponent},
    { path: "home", component: HomeComponent},
    { path: "contact", component: ContactusComponent},
    { path: "bookstore", loadChildren: './BooksModule/books.module#BooksModule'},
    { path: "selectedbook/:author/:code/:name", component: SelectedBookComponent},
    { path: "**", redirectTo: "home", pathMatch:"full"},
  ];
  
@NgModule({
imports: [
    RouterModule.forRoot(routes)
]
})

export class AppRoutingModule {}