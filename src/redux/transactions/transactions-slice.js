import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transactions-operations';

const initialState = {
  transactions: [],
  income: [],
  expense: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [transactionOperations.getAllTransactions.fulfilled]: (
      { transactions, isLoading, error },
      { payload },
    ) => {
      transactions = payload;
      isLoading = false;
      error = null;
    },
    [transactionOperations.getAllTransactions.pending]: ({ isLoading }, _) => {
      isLoading = true;
    },
    [transactionOperations.getAllTransactions.rejected]: (
      { isLoading, error },
      _,
    ) => {
      isLoading = false;
      error = null;
    },

    [transactionOperations.getIncomes.fulfilled]: (
      { income, isLoading, error },
      { payload },
    ) => {
      income = payload;
      isLoading = false;
      error = null;
    },
    [transactionOperations.getIncomes.pending]: ({ isLoading }, _) => {
      isLoading = true;
    },
    [transactionOperations.getIncomes.rejected]: ({ isLoading, error }, _) => {
      isLoading = false;
      error = 'error';
    },

    [transactionOperations.getExpenses.fulfilled]: (
      { expense, isLoading, error },
      { payload },
    ) => {
      expense = payload;
      isLoading = false;
      error = null;
    },
    [transactionOperations.getExpenses.pending]: ({ isLoading }, _) => {
      isLoading = true;
    },
    [transactionOperations.getExpenses.rejected]: ({ isLoading, error }, _) => {
      isLoading = false;
      error = 'error';
    },

    [transactionOperations.addTransaction.fulfilled]: (
      { transactions, isLoading, error },
      { payload },
    ) => {
      transactions = [...transactions, payload];
      isLoading = false;
      error = null;
    },
    [transactionOperations.addTransaction.pending]: ({ isLoading }, _) => {
      isLoading = true;
    },
    [transactionOperations.addTransaction.rejected]: (
      { isLoading, error },
      _,
    ) => {
      isLoading = false;
      error = 'error';
    },

    [transactionOperations.deleteTransaction.fulfilled]: (
      { transactions },
      { payload },
    ) => {
      transactions = transactions.filter(({ _id }) => _id !== payload);
    },
  },
});

export default transactionsSlice.reducer;
