import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../../services/loading.service";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private service:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.service.loading.next(true);  //trigger the loading function ==>loading services
    return next.handle(request).pipe(
      catchError(err=>{  // if error is available
        console.log(err);
        return throwError(err);
      }),finalize(()=>{  // request and response finally
        this.service.loading.next(false); // return the false to serivice
      })
    );
  }
}
