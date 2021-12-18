import { ActionCreator, AnyAction } from 'redux';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';

export const increment: ActionCreator<AnyAction> = () => ({
  type: INCREMENT,
});

export const decrement: ActionCreator<AnyAction> = () => ({
  type: DECREMENT,
});
