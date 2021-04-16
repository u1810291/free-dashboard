import { Injectable } from '@angular/core';
import { UIState } from '../index';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class ChartActions {
  static SET_CHART = 'SET_CHART';

  constructor(
    private ngRedux: NgRedux<UIState>,
  ) { }

  setOneCall(payload) {
    this.ngRedux.dispatch({
      type: ChartActions.SET_CHART,
      oneCallChart: payload
    });
  }
}
