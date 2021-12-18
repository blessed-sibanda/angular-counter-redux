import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from './app.state';
import { counterReducer } from './counter.reducer';

export function createAppStore(): Store<AppState> {
  return createStore(counterReducer, composeWithDevTools());
}
