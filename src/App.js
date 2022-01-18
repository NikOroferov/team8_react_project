import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import CashFlowPage from './views/CashFlowPage/CashFlowPage';
import ReportsPage from './views/ReportsPage/ReportsPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cashflow" element={<CashFlowPage />} />
        <Route path="/reports/*" element={<ReportsPage />} />
      </Routes>
    </>
  );
}

export default App;
