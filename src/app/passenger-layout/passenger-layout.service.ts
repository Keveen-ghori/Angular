import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { Navbar } from './models/navbar.interface';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class PassengerLayoutService {
  constructor(private httpClient: HttpClient) {
  }

  getNavbarData(): Observable<Navbar[]> {
    return this.httpClient
      .get(`${environment.PASSENGER_API}/navigations`)
      .pipe(map((response: any) => response as Navbar[]));
  }
}
