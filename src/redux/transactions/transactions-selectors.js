import { createSelector } from 'reselect';

const getTransactions = state => state.transactions.transactions;
const getIsLoading = state => state.transactions.isLoading;

const getIncomes = createSelector(getTransactions, transactions =>
  transactions.filter(transaction => transaction.income === true),
);

const getExpenses = createSelector(getTransactions, transactions =>
  transactions.filter(transaction => transaction.income === false),
);

const transactionsSelectors = {
  getTransactions,
  getIsLoading,
  getIncomes,
  getExpenses,
};

export default transactionsSelectors;
