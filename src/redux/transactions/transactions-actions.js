import { createAction } from '@reduxjs/toolkit';

const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
const getTransactionsError = createAction('transactions/getTransactionsError');

const addTransactionsRequest = createAction(
  'transactions/addTransactionsRequest',
);
const addTransactionsSuccess = createAction(
  'transactions/addTransactionsSuccess',
);
const addTransactionsError = createAction('transactions/addTransactionsError');

const deleteTransactionsRequest = createAction(
  'transactions/deleteTransactionsRequest',
);
const deleteTransactionsSuccess = createAction(
  'transactions/deleteTransactionsSuccess',
);
const deleteTransactionsError = createAction(
  'transactions/deleteTransactionsError',
);

const transactionsActions = {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
  deleteTransactionsRequest,
  deleteTransactionsSuccess,
  deleteTransactionsError,
};

export default transactionsActions;
