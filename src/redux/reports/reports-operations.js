import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api-services';

const getCategoryReports = createAsyncThunk(
  'transaction/getCategoryReports',
  async ({ date, isIncome }, thunkAPI) => {
    try {
      const { data } = await api.getCategoryReport(date, isIncome);
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error)
    }
  },
);

const getSubcategoryReports = createAsyncThunk(
  'transaction/getSubategoryReports',
  async ({ date, isIncome, category }, thunkAPI) => {
    try {
      const { data } = await api.getSubcategoryReport(date, isIncome, category);
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error)
    }
  },
);

const getPeriodReports = createAsyncThunk(
  'transaction/getPeriodReports',
  async ({ date, isIncome }, thunkAPI) => {
    try {
      const { data } = await api.getPeriodReports(date, isIncome);
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error)
    }
  },
);

const reportsOperations = {
  getCategoryReports,
  getSubcategoryReports,
  getPeriodReports,
};

export default reportsOperations;
