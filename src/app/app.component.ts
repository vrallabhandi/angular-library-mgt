import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
