import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import ReservationList from './pages/ReservaionList';
import ReservationForm from './pages/ReservationForm';
import ReservationInquiry from './pages/ReservationInquiry';

function App() {
  const [reservatedList, setReservatedList] = useState([
    {
      id: 0,
      user_name: '정세영',
      user_birth: '000323',
      user_cotact: '01012341234',
      reason: '상담',
      date: '10월19일13:00시',
      is_noshow: false,
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<ReservationList />} />
        <Route path='/reservationform/:id' element={<ReservationForm reservatedList={reservatedList} setReservatedList={setReservatedList} />} />
        <Route path='/reservationInquiry' element={<ReservationInquiry reservatedList={reservatedList} setReservatedList={setReservatedList} />} />
      </Routes>
    </>
  );
}

export default App;
