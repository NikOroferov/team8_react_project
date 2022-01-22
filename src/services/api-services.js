import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/';

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

// Reports

const getCategoryReport = (date, isIncome) =>
  axios.get(`/transaction/category-by-month?date=${date}&isIncome=${isIncome}`);
const getSubcategoryReport = (date, isIncome, category) =>
  axios.get(
    `/transaction/subcategory-by-month?date=${date}&isIncome=${isIncome}&category=${category}`,
  );

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
  getCategoryReport,
  getSubcategoryReport,
};

export default api;
