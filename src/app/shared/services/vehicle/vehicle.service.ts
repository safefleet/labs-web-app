import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import { environment } from './../../../../environments/environment'

@Injectable()
export class VehicleService {
  private URL = environment.API_URL + 'vehicles/';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<[Vehicle]> {
    return this.http.get<[Vehicle]>(this.URL);
  }

  getPositions(vehicleId: number): Observable<[Position]> {
    return this.http.get<[Position]>(this.URL + vehicleId + '/positions/');
  }
}
