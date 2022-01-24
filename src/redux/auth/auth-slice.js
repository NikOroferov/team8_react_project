import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { balanceOperations } from '../balance';

const initialState = {
  user: {
    name: '',
    email: '',
    balance: null,
  },
  token: null,
  isLogedIn: false,
  isRegistered: false,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state) {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isRegistered = true;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.balance = action.payload.user.balance;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user.name = '';
      state.user.email = '';
      state.user.balance = null;
      state.token = null;
      state.isLogedIn = false;
      state.isRegistered = false;
    },

    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isLogedIn = true;
    },
    [authOperations.googleLogIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.token;
      state.isLogedIn = true;
    },
    [balanceOperations.setUserBalance.fulfilled]: (state, action) => {
      state.user.balance = action.meta.arg;
    },
  },
});

export default authSlice.reducer;
