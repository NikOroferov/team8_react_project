import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/api/';
axios.defaults.baseURL = 'https://mongo-kapusta-team8.herokuapp.com/api/';

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

const register = requisites => axios.post('auth/register', requisites);

const login = requisites => axios.post('auth/login', requisites);

const logout = () => axios.post(`auth/logout`);

const googleLogin = () => axios.get('auth/googleLogin');

const googleLogInBtn = requisites =>
  axios.post('auth/google-redirect', requisites);
// User

const setUserBalance = newBalance =>
  axios.patch('users/balance', { newBalance });

const getCurrentUser = () => axios.get('users/current');

const updateUserBalance = balance => axios.patch('users/balance', balance);

// Transactions

const getTransaction = () => axios.get('transaction/');

const addTransaction = transaction => axios.post('transaction/', transaction);

const deleteTransaction = transactionId =>
  axios.delete(`transaction/${transactionId}`);

// Reports

const getCategoryReport = (date, isIncome) =>
  axios.get(`transaction/category-by-month?date=${date}&isIncome=${isIncome}`);

const getSubcategoryReport = (date, isIncome, category) =>
  axios.get(
    `transaction/subcategory-by-month?date=${date}&isIncome=${isIncome}&category=${category}`,
  );

// const getPeriodReports = month => axios.get('transaction/total-by-month?');

const getResumeReport = date => axios.get(`transaction/summary?date=${date}`);

const api = {
  token,
  baseUrl,
  register,
  login,
  logout,
  googleLogin,
  setUserBalance,
  updateUserBalance,
  getCurrentUser,
  addTransaction,
  getTransaction,
  deleteTransaction,
  getCategoryReport,
  getSubcategoryReport,
  getResumeReport,
  googleLogInBtn,
};

export default api;
