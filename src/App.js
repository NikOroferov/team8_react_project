import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import CashFlowPage from './views/CashFlowPage/CashFlowPage';
import ReportsPage from './views/ReportsPage/ReportsPage';
import Header from './components/Header/Header';
import Container from './components/Container';
// import CommonModal from './components/Modal/CommonModal';

function App() {
  // const [showModal, setShowModal] = useState(true);

  // const toggleModal = () => {
  //   setShowModal(prevState => !prevState);
  // };

  return (
    <>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cashflow" element={<CashFlowPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
