import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { balanceOperations } from '../balance';

const initialState = {
  user: {
    name: '',
    email: '',
    balance: null,
    avatar: null,
  },
  token: null,
  isLogedIn: false,
  isRegistered: false,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleLogIn: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.balance = action.payload.balance;
      state.user.avatar = action.payload.avatar;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
  },
  extraReducers: {
    [authOperations.register.fulfilled](state) {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isRegistered = true;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      // state.user.avatar = action.payload.user.avatar;
      state.user.balance = action.payload.user.balance;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user.name = '';
      state.user.email = '';
      state.user.avatar = null;
      state.user.balance = null;
      state.token = null;
      state.isLogedIn = false;
      state.isRegistered = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFethingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isLogedIn = true;
      state.isFethingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFethingCurrentUser = false;
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

export const { googleLogIn } = authSlice.actions;
export default authSlice.reducer;
