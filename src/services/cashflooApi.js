import { store } from '../redux/store';

const BASE_URL = 'https://mongo-kapusta-team8.herokuapp.com/api/transaction';
// const BASE_URL = 'http://localhost:3001/api/transaction';

// const token = store.getState().auth.token;

async function fetchWithErrorHandling(url = '', method, data) {
  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${store.getState().auth.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
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

// Запрос на добавление по виду Рсход/Доход
export function fetchEntry(data) {
  return fetchWithErrorHandling(BASE_URL, 'POST', data);
}

// Запрос на удаление Рсход/Доход
export function fetchDelete(transactionId) {
  return fetchWithErrorHandling(`${BASE_URL}/${transactionId}`, 'DELETE');
}

// Запрос все трансакции для мобилки
export function fetchAll() {
  return fetchWithErrorHandling(BASE_URL);
}
