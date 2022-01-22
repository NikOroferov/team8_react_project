import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import balanceOperations from '../balance/balance-operations';

const initialState = {
  user: {
    name: '',
    email: '',
    balance: null,
  },
  token: null,
  isLogedIn: false,
  isRegistered: false,
  // isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraRedusers: {

    [authOperations.register.fulfilled](
      { user, token, isLogedIn },
      { payload },
    ) {
      user = payload.user;
      token = payload.token;
      isLogedIn = true;

    },
    [authOperations.logIn.fulfilled]({ user, token, isLogedIn }, { payload }) {
      user = payload.user;
      token = payload.token;
      isLogedIn = true;
    },
    [authOperations.logOut.fulfilled]({ user, token, isLogedIn }, action) {
      user = { email: '' };
      token = null;
      isLogedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](
      { user, isLogedIn },
      { payload },
    ) {
      user = payload;
      isLogedIn = true;
    },
    [authOperations.googleLogIn.fulfilled](state, action) {
      state.user = { email: '' };
    },
    [authOperations.googleLogIn.rejected](state, action) {},

    [balanceOperations.setUserBalance.fulfilled]({ user }, { payload }) {
      user.balance = payload.balance;
    },
    [balanceOperations.getUserBalance.fulfilled]({ user }, { payload }) {
      user.balance = payload.balance;
    },
  },
});

export default authSlice.reducer;
