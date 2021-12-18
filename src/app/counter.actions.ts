import { ActionCreator, AnyAction } from 'redux';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';

export default class CounterActions {
  static increment: ActionCreator<AnyAction> = () => ({
    type: INCREMENT,
  });

  static decrement: ActionCreator<AnyAction> = () => ({
    type: DECREMENT,
  });
}
