import { Injectable } from '@angular/core';
import { UIState } from '../index';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class ChartActions {
  static SET_ONE_CALL_CHART = 'TEST_SET_ONE_CALL_CHART';

  constructor(
    private ngRedux: NgRedux<UIState>,
  ) { }

  getOneCall() {
    this.ngRedux.dispatch({
      type: ChartActions.SET_ONE_CALL_CHART,
    });
  }
}
