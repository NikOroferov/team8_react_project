import api from '../../services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = api.token;

const register = createAsyncThunk(
  'auth/register',
  async (requisites, { rejectWithValue }) => {
    try {
      const { data } = await api.register(requisites);
      // token.set(data.token);
      alert(
        'Поздравляем, вы успешно зарегистрировались, теперь вам нужно, зайти на свою почту и верифицироваться, после этого еще раз ввести в форму , свою почту и пароль',
      );
      return data;
    } catch (error) {
      console.log(error.message);
      const err = rejectWithValue(error.response.data);
      alert(err.payload.message);
      return rejectWithValue(error.response.data);
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (requisites, rejected) => {
  try {
    const { data } = await api.login(requisites);
    token.set(data.data.token);
    return data.data;
  } catch (error) {
    alert(
      'Вероятно вы спешите и забыли зарегистрироваться, либо зайти на почту и верифицироваться либо опечатались в форме',
    );
    console.log(error.message);
    return rejected(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, rejected) => {
  try {
    await api.logout();
    token.unset();
  } catch (error) {
    console.log(error.message);
    return rejected(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await api.getCurrentUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const googleLogIn = createAsyncThunk(
  'auth/googleLogin',
  async (token, thunkAPI) => {
    if (token === null) {
      return thunkAPI.rejectWithValue('Need a token');
    }

    token.set(token);
    try {
      const { data } = await api.googleLogin();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  googleLogIn,
};

export default authOperations;
