import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Passengers } from './models/passenger-dashboard.interface';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';

@Injectable()
export class PassengerDashboardService {
  constructor(private httpClient: HttpClient) {}

  GetPassengersData(): Observable<Passengers[]> {
    return this.httpClient
      .get(`${environment.PASSENGER_API}/passengers`)
      .pipe(map((response: any) => response as Passengers[]));
  }

  GetCheckedInPassengersData(): Observable<Passengers[]> {
    return this.httpClient
      .get(`${environment.PASSENGER_API}/passengers?checkIn=true`)
      .pipe(map((response: any) => response as Passengers[]));
  }

  GetPassengerById(id: number): Observable<HttpResponse<Passengers>> {
    return this.httpClient
      .get<Passengers>(`${environment.PASSENGER_API}/passengers?id=${id}`, {
        observe: 'response',
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  UpdatePassengerById(
    passenger: Passengers
  ): Observable<HttpResponse<Passengers>> {
    // let header = new HttpHeaders({
    //   'content-type': 'application/json',
    // });

    // let optios = new HttpParamsOptions({
    //   headers: new Headers({
    //     'content-type': 'application/json',
    //   }),
    // });

    return this.httpClient
      .put<Passengers>(
        `${environment.PASSENGER_API}/passengers/${passenger.id}`,
        passenger
      )
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
