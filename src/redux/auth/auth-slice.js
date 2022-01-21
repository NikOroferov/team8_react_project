import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operation';
import balanceOperations from '../balance/balance-operations';

const initialState = {
  user: {
    email: '',
    balance: null,
  },
  token: null,
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraRedusers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { email: '' };
      state.token = null;
      state.isLogedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogedIn = true;
    },
    [authOperations.googleLogIn.fulfilled](state, action) {},
    [authOperations.googleLogIn.rejected](state, action) {},

    [balanceOperations.setUserBalance.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
    },
    [balanceOperations.getUserBalance.fulfilled](state, action) {
      state.user.balance = action.payload.balance;
    },
  },
});

export default authSlice;
