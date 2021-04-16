import { ChartActions } from './chart.actions';

const INITIAL_STATE = {
  oneCallChart: '',
};

export function ChartReducer(state = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case ChartActions.SET_CHART:
      return Object.assign({}, state);

    default:
      return state;
  }
}

