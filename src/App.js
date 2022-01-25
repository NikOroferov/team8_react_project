import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from './components/TypeRoutes/PrivateRoute';

import './App.css';
import HomePage from './views/HomePage/HomePage';
import CashFlowPage from './views/CashFlowPage/CashFlowPage';
import ReportsPage from './views/ReportsPage/ReportsPage';
import Header from './components/Header/Header';
import Container from './components/Container';
import GoogleRedirectPage from './views/GoogleRedirectPage/GoogleRedirectPage';
import { authOperations, authSelectors } from './redux/auth';

import Loader from './components/Loader/Loader';

// import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  console.log(token);

  useEffect(() => {
    if (token) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cashflow" element={<CashFlowPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Route>

          <Route path="/google-redirect" element={<GoogleRedirectPage />} />
        </Routes>
      </Container>
      {/* <Toaster position="top-right" /> */}
    </>
  );
}

export default App;
