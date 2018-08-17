import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Observer } from '../../../node_modules/rxjs/Observer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  title = new Promise((res) => {
    setTimeout(() => {
      res('Library Management');
    }, 2000);
  });

  time = Observable.create((observer: Observer<Date>) => {
    const interval = setInterval(() => {
      observer.next(new Date());
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      observer.complete();
    }, 10000);
  });

}
