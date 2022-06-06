import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone ({
            setHeaders:{
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': 'fd1841ffcamshcbc7121fdca2a61p1a4ff8jsnf8445d03121d',
            },
            setParams : { key : 'a5df228d4ab34999ba91d6c4087ce743', }
        });
        return next.handle(req);
    }
}