/* tslint:disable: new-parens */
/* tslint:disable: deprecation */

import { Component, OnInit } from '@angular/core';
import { ChartActions } from 'src/app/view/ThemeOptions/store/charts/chart.actions';
import { WeatherService } from '../../../../controller/services/weather.service';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styles: []
})
export class ChartjsComponent implements OnInit {

  heading = 'ChartJS';
  subheading = 'Huge selection of charts created with the Vue ChartJS Plugin';
  icon = 'pe-7s-bandaid icon-gradient bg-amy-crisp';
  private chart: ChartActions;

  constructor(
    private apiService: WeatherService,
  ) { }

  ngOnInit(): void {
    function toTimestamp(strDate) {
      const datum = Date.parse(strDate);
      return datum / 1000;
    }
    try {
      const date = new Date();
      date.setDate(date.getDate() - 5);
      this.apiService.getOneCall(
        41.311081,
        69.240562,
        toTimestamp(date),
        '0097f77d9dc63d7d09fc9f7f8205c5fc').subscribe((res) => {
          console.log(res);
          this.chart.setOneCall(res);
        });
    }
    catch (err) {
      throw new Error(`Method not implemented. ${err}`);
    }
  }

}
