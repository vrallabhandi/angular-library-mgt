import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { of } from "rxjs/observable/of";

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    constructor(private router: Router){
       // this.router = router;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req);
        // .catch((resp: HttpErrorResponse) => {
        //     console.log(resp);
        //     if(resp.status == 401){
        //         this.router.navigate(['/login']);
        //     }
        //     return of(resp);
        // });
        // }
    }
}