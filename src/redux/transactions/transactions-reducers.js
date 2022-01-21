import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import transactionsActions from './transactions-actions';

const initialState = [];

const transactions = createReducer(initialState, {
  [transactionsActions.getTransactionsSuccess]: (_, { payload }) => payload,
  [transactionsActions.addTransactionsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [transactionsActions.deleteTransactionsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [transactionsActions.getTransactionsRequest]: () => true,
  [transactionsActions.getTransactionsSuccess]: () => false,
  [transactionsActions.getTransactionsError]: () => false,

  [transactionsActions.addTransactionsRequest]: () => true,
  [transactionsActions.addTransactionsSuccess]: () => true,
  [transactionsActions.addTransactionsError]: () => true,

  [transactionsActions.deleteTransactionsRequest]: () => true,
  [transactionsActions.deleteTransactionsSuccess]: () => true,
  [transactionsActions.deleteTransactionsError]: () => true,
});

export default combineReducers({
  transactions,
  loading,
});
