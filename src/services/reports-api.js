import { store } from '../redux/store';

const BASE_URL = 'https://mongo-kapusta-team8.herokuapp.com/api/transaction';

const token = store.getState().auth.token;

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${store.getState().auth.token}`,
      // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk1NmUxNjVmODdiYWJmYzFhMzcxMiIsImlhdCI6MTY0MzA0MjU0MywiZXhwIjoxNjQ0MjUyMTQzfQ.ujceW3L2w0AmRqlvG3EW4zj6tQg3Dr97ynDEy32xkOc',
    },
  });
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// получение отчета по категориям за месяц

export function fetchCategoryByMonth(date, typeReport) {
  return fetchWithErrorHandling(
    `${BASE_URL}/category-by-month?date=${date}&isIncome=${typeReport}`,
  );
}

// получение отчета по подкатегориям за месяц

export function fetchSubcategoryByMonth(date, typeReport, activeCategory) {
  return fetchWithErrorHandling(`
${BASE_URL}/subcategory-by-month?date=${date}&isIncome=${typeReport}&category=${activeCategory}`);
}

// получение отчета по суммам трат и доходов за месяц

export function fetchTotalReportByMonth(date) {
  return fetchWithErrorHandling(`${BASE_URL}/total-by-month?date=${date}`);
}
