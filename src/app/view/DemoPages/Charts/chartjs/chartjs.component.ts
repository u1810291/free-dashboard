/* tslint:disable: new-parens */
/* tslint:disable: deprecation */

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../controller/services/weather.service';
import { Weather } from '../../../../model/weather';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styles: []
})
export class ChartjsComponent implements OnInit {
  heading = 'ChartJS';
  subheading = 'Huge selection of charts created with the Vue ChartJS Plugin';
  icon = 'pe-7s-bandaid icon-gradient bg-amy-crisp';

  constructor(private apiService: WeatherService) { }
  ngOnInit(): void {
    function toTimestamp(strDate) {
      const datum = Date.parse(strDate);
      return datum / 1000;
    }
    try {
      console.log('response');
      this.apiService.getOneCall(41.311081, 69.240562, toTimestamp(new Date), '0097f77d9dc63d7d09fc9f7f8205c5fc').subscribe((res) => {
        console.log(res);
      });
    }
    catch (err) {
      throw new Error(`Method not implemented. ${err}`);
    }
  }

}
