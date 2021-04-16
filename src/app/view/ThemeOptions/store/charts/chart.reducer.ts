import { ChartActions } from './chart.actions';

export interface State {
  oneCall: []
}

const INITIAL_STATE = {
  oneCall: [],
};

const map = {
  [ChartActions.SET_ONE_CALL_CHART]: (state, { payload }) => ({
    ...state,
    oneCall: payload
  })
};

export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || INITIAL_STATE;
