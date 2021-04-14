import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiURL: string = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=41.311081&lon=69.240562&dt=1617712610&appid=0097f77d9dc63d7d09fc9f7f8205c5fc';

  constructor(private httpClient: HttpClient) { }
}