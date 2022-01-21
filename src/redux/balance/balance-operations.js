import api from '../../services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setUserBalance = createAsyncThunk(
  'user/setUserBalance',
  async (newBalance, thunkAPI) => {
    try {
      const { data } = await api.setUserBalance(newBalance);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const getUserBalance = createAsyncThunk(
  'user/getUserBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getUserBalance();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const balanceOperations = {
  setUserBalance,
  getUserBalance,
};

export default balanceOperations;
