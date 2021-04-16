import { combineReducers } from 'redux';
import { ConfigReducer } from './config/config.reducer';
import ChartReducer from './charts/chart.reducer';

export class ArchitectUIState {
  config;
  charts;
}

export const rootReducer = combineReducers<ArchitectUIState>({
  config: ConfigReducer,
  charts: ChartReducer
});


