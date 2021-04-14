import { Weather } from '../../model/weather'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiURL: string = 'https://api.openweathermap.org/';

  constructor(private httpClient: HttpClient) { }
  public getOneCall(lat: number, lon: number, dt: number, appid: string) {
    return this.httpClient.get<Weather[]>(`${this.apiURL}/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${appid}`);
  }
}