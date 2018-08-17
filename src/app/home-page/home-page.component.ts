import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Observer } from '../../../node_modules/rxjs/Observer';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {  }

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

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.route.params.subscribe(data => {
      console.log(data['id']);
    });
  }

  goToPage(pageNum: number) {
    this.router.navigate(['/home', pageNum]);
  }

}
