import { Component } from '@angular/core';
import { WeatherService } from './controller/services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ArchitectUI - Angular 7 Bootstrap 4 & Material Design Admin Dashboard Template';
  constructor(private apiService: WeatherService) { }

  ngOninit() {
    this.apiService.getOneCall().subscribe((res) => {
      this.apiService.getOneCall(this.apiService.nextPage).subscribe((res) => {
        console.log(res.body);
      });
    });
  }
}
