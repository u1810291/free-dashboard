import { Injectable } from '@angular/core';
import { ArchitectUIState } from '../index';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class ChartActions {
  static SET_ONE_CALL_CHART = 'TEST_SET_ONE_CALL_CHART';

  constructor(
    private ngRedux: NgRedux<ArchitectUIState>,
  ) { }

  getOneCall() {
    this.ngRedux.dispatch({
      type: ChartActions.SET_ONE_CALL_CHART,
    });
  }


}
