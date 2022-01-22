import api from '../../services/api-services';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getTransaction();
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error);
    }
  },
);

const addTransaction = createAsyncThunk(
  'reansactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await api.addTransaction(transaction);
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error);
    }
  },
);

const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.deleteTransaction(id);
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error);
    }
  },
);

const getIncomes = createAsyncThunk(
  'transaction/getIncomes',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getIncomes();
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error);
    }
  },
);

const getExpenses = createAsyncThunk(
  'transaction/getExpenses',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getExpenses();
      return data;
    } catch (error) {
      console.log(error.message);
      // return thunkAPI.rejectWithValue(error);
    }
  },
);

const transactionOperations = {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
  getIncomes,
  getExpenses,
};

export default transactionOperations;
