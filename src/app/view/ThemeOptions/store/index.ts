import { combineReducers } from 'redux';
import { ConfigReducer } from './config/config.reducer';
import { ChartReducer } from './charts/chart.reducer';

export class UIState {
  config;
  chart;
}

export const rootReducer = combineReducers<UIState>({
  config: ConfigReducer,
  chart: ChartReducer,
});


