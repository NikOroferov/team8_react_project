import axios from 'axios';

axios.defaults.baseURL = '';

const baseUrl = axios.defaults.baseURL;
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
const register = requisites => axios.post('auth/register', requisites); //requisites={email,password}
const login = requisites => axios.post('auth/login', requisites); //requisites={email,password}
const logout = () => axios.post(`auth/logout`);
// const refresh = () => axios.get('auth/refresh');

// User
const setUserBalance = balance => axios.post('/user/balance', balance);
const getUserBalance = () => axios.get('/user/balance');
const updateUserBalance = balance => axios.patch('/user/balance', balance); //balance={newBalance: balance}
const getUserInfo = () => axios.get('/user');
const getCurrentUser = () => axios.get('/user/current');

// Transactions
const postTransaction = transaction => axios.post('/transaction', transaction);
const getTransaction = () => axios.get('/transaction');

const deleteTransaction = transactionId =>
  axios.delete(`/transaction/${transactionId}`);

const api = {
  token,
  baseUrl,
  register,
  login,
  logout,
  setUserBalance,
  getUserBalance,
  updateUserBalance,
  getUserInfo,
  getCurrentUser,
  postTransaction,
  getTransaction,
  deleteTransaction,
};

export default api;
