import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthList from '../components/ReservationList/MonthList';

const ReservationList = () => {
  const [value, onChange] = useState(new Date());
  const [reservationList, setReservationList] = useState();

  let limit = value.getDate().toString();
  useEffect(() => {
    fetch('data/reservation.json')
      .then(res => res.json())
      .then(data => setReservationList(data.reservationListData));
  }, [limit]);

  const reservationTime = [];
  if (reservationList) {
    for (let i = 0; i < 9; i++) {
      reservationTime.push(reservationList[limit][i]);
    }
  }

  console.log(reservationTime);
  console.log(reservationList);
  console.log(typeof limit, limit);

  return (
    <section>
      <MonthList
        //
        value={value}
        onChange={onChange}
        reservationTime={reservationTime}
      />
    </section>
  );
};

export default ReservationList;
