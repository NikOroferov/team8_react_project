import api from '../../services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const token = api.token;

const register = createAsyncThunk(
  'auth/register',
  async (requisites, { rejectWithValue }) => {
    try {
      const { data } = await api.register(requisites);
      toast.success(
        `Вы успешно зарегистрировались! На Ваш почтовый адрес было отправлено письмо со ссылкой подтверждения регистрации. После подтверждения Вы сможете зайти на сайт, используя Ваш логин и пароль`,
      );
      return data;
    } catch (error) {
      const err = rejectWithValue(error.response.data);
      toast.error(err.payload.message);
      return rejectWithValue(error.response.data);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (requisites, { rejectWithValue }) => {
    try {
      const { data } = await api.login(requisites);
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      toast.error(
        `Пожалуйста, проверьте правильность написания логина и пароля`,
      );
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
