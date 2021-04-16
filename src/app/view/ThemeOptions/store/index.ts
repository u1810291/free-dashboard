import { combineReducers } from 'redux';
import { ConfigReducer } from './config/config.reducer';
import ChartReducer from './charts/chart.reducer';

export class UIState {
  config;
  charts;
}

export const rootReducer = combineReducers<UIState>({
  config: ConfigReducer,
  charts: ChartReducer
});


