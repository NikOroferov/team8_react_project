import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const balanceInitialState = 0;

const balanceReducer = createReducer(balanceInitialState, {});

export default combineReducers({
  balance: balanceReducer,
});
