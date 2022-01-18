import axios from 'axios';

axios.defaults.baseURL = '';

// Token
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Auth
const register = requisites => axios.post('/auth/register', requisites); //requisites={email,password}
const login = requisites => axios.post('/auth/login', requisites); //requisites={email,password}
const logout = () => axios.post(`/auth/logout`);

// User
const updateUserBalance = balance => axios.patch('/user/balance', balance); //balance={newBalance: balance}
const getUserInfo = () => axios.get('/user');

// Transactions
const postIncome = income => axios.post('/transaction/income', income); //income={description,amount,date}
const getIncome = () => axios.get('/transaction/income');

const postExpense = expense => axios.post('/transaction/expense', expense); //expense={description,amount,date,category}
const getExpense = () => axios.get('/transaction/expense');

const deleteTransaction = transactionId =>
  axios.delete(`/transaction/${transactionId}`);

const api = {
  token,
  register,
  login,
  logout,
  updateUserBalance,
  getUserInfo,
  postIncome,
  getIncome,
  postExpense,
  getExpense,
  deleteTransaction,
};

export default api;
