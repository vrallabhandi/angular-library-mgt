import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
