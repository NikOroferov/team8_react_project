import api from '../../services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as authAPI from '../../services/api-services';

const token = api.token;

const register = createAsyncThunk(
  'auth/register',
  async (requisites, rejected) => {
    try {
      const { data } = await api.register(requisites);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejected(error);
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (requisites, rejected) => {
  try {
    const { data } = await api.login(requisites);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    return rejected(error);
  }
});

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await authAPI.login(credentials);
//       token.set(data.data.token);
//       return data;
//     } catch (error) {
//       if (error.response.data.message === 'Invalid password') {
//         // toast.error('Неверный пароль. Пожалуйста, попробуйте еще раз.');
//       } else if (error.response.data.message === 'Email not verify') {
//         // toast.error('Ваш имейл не верифицырован.');
//       } else {
//         // toast.error(
//         //   'Пожалуйста, проверьте свои данные для входа и попробуйте еще раз.',
//         // );
//       }
//       return rejectWithValue(error.message);
//     }
//   },
// );

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
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(token);

    try {
      const { data } = await api.getCurrentUser();
      return data;
    } catch (error) {}
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
      const { data } = await api.getCurrentUser();
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
