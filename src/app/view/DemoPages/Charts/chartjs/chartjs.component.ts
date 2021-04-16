/* tslint:disable: new-parens */
/* tslint:disable: deprecation */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../controller/services/weather.service';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styles: []
})
export class ChartjsComponent implements OnInit {
  charts: Observable<any>;

  heading = 'ChartJS';
  subheading = 'Huge selection of charts created with the Vue ChartJS Plugin';
  icon = 'pe-7s-bandaid icon-gradient bg-amy-crisp';

  constructor(private apiService: WeatherService, private store: Store<{ charts: any }>) {
    this.charts = store.select('charts');
  }

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
        });
    }
    catch (err) {
      throw new Error(`Method not implemented. ${err}`);
    }
  }

}
