import { store } from '../redux/store';

const BASE_URL = 'https://mongo-kapusta-team8.herokuapp.com/api/transaction';

// const token = store.getState().auth.token;

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${store.getState().auth.token}`,
    },
  });
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// Запрос за транзакуиями по виду Рсход/Доход
export function fetchTransactions(typeIncomes) {
  return fetchWithErrorHandling(`${BASE_URL}?isIncome=${typeIncomes}`);
}

// Запрос за итогами помесяцно по виду Рсход/Доход
export function fetchCostsMouth(typeIncomes) {
  return fetchWithErrorHandling(`${BASE_URL}/summary?isIncome=${typeIncomes}`);
}
