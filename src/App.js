import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import CashFlowPage from './views/CashFlowPage/CashFlowPage';
import ReportsPage from './views/ReportsPage/ReportsPage';
import Header from './components/Header/Header';
import Container from './components/Container';
import GoogleRedirectPage from './views/GoogleRedirectPage/GoogleRedirectPage';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cashflow" element={<CashFlowPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/google-redirect" element={<GoogleRedirectPage />} />
        </Routes>
      </Container>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
