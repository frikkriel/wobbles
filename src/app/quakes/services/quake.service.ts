import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuakeService {

  constructor(private http: HttpClient) { }

  getAllQuakes(){
    return this.http
      .get<any>('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-01&endtime=2023-01-11&minmagnitude=5')
      .pipe(map((quakes) => quakes.features || []));
  }
}
