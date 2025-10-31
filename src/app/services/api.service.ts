import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
declare let gtag: Function;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  sendEvent(action: string, params?: Record<string, any>) {
    gtag('event', action, params);
  }
}
