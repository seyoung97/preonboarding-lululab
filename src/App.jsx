import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import ReservationList from './pages/ReservaionList';
import ReservationForm from './pages/ReservationForm';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<ReservationList />} />
        <Route path='/reservationform' element={<ReservationForm />} />
      </Routes>
    </>
  );
}

export default App;
