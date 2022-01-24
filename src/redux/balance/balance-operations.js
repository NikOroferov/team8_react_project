import api from '../../services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setUserBalance = createAsyncThunk(
  'user/setUserBalance',
  async (balance, thunkAPI) => {
    try {
      const { data } = await api.setUserBalance(balance);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const balanceOperations = {
  setUserBalance,
};

export default balanceOperations;
