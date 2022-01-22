import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

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

const register = requisites => axios.post('api/auth/register', requisites); //requisites={email,password}

const login = requisites => axios.post('api/auth/login', requisites); //requisites={email,password}

const logout = () => axios.post(`api/auth/logout`);

// const refresh = () => axios.get('auth/refresh');

// User

const setUserBalance = balance => axios.post('api/user/balance', balance);
const getUserBalance = () => axios.get('api/user/balance');
const updateUserBalance = balance => axios.patch('api/user/balance', balance);
const getUserInfo = () => axios.get('api/user');
const getCurrentUser = () => axios.get('api/user/current');

// Transactions

const getTransaction = () => axios.get('/transaction');

const addTransaction = transaction => axios.post('/transaction', transaction);

const deleteTransaction = transactionId =>
  axios.delete(`/transaction/${transactionId}`);

const getIncomes = () => axios.get('/transactionIncomes');

const getExpenses = () => axios.get('/transactionExpenses');

// Reports

const getCategoryReport = (date, isIncome) =>
  axios.get(`/transaction/category-by-month?date=${date}&isIncome=${isIncome}`);

const getSubcategoryReport = (date, isIncome, category) =>
  axios.get(
    `/transaction/subcategory-by-month?date=${date}&isIncome=${isIncome}&category=${category}`,
  );


// const getPeriodReports = () => axios.get('/transaction/period');

const getResumeReport = date => axios.get(`/transaction/summary?date=${date}`);


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
  addTransaction,
  getTransaction,
  deleteTransaction,
  getIncomes,
  getExpenses,
  getCategoryReport,
  getSubcategoryReport,
  getResumeReport,

};

export default api;
