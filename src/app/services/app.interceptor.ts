import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { of } from "rxjs/observable/of";
import { Router } from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            url: environment.baseUrl + req.url
        });
        console.log(req.url);
        return next.handle(req)
            .catch((resp) => {
                console.log(resp)
                if (resp.status === 404) {
                    this.router.navigate(['/login']);
                }
                return of(resp);
            });
    }
}