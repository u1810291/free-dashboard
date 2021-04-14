import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {

  apiURL: string = 'https://api.openweathermap.org/';

  constructor(private httpClient: HttpClient) { }
}