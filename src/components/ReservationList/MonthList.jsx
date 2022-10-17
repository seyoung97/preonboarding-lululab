import { useEffect, useState, memo } from 'react';

import styled from 'styled-components';
import { mainColor } from '../../theme';
import { useNavigate } from 'react-router-dom';

import Calendar from 'react-calendar';
import SelectTime from './SelectTime';

import 'react-calendar/dist/Calendar.css';

const MonthList = ({ value, onChange, reservationTime }) => {
  const navigate = useNavigate();

  // const handleTimeClick = e => {
  //   let selectedTime = reservationListData[e.target.id].time;
  //   return selectedTime;
  // };

  // const handleReservationClick = () => {
  //   if (selectedTime) {
  //     navigate(`/reservationform/${selectedTime}`);
  //   }
  // };

  return (
    <Section>
      <Calendar onChange={onChange} value={value} />
      <div className='time-container'>
        <div className='able-time'>예약 시간 선택</div>
        <ul>
          {reservationTime &&
            reservationTime.map(data => {
              return (
                <li key={data.id}>
                  <SelectTime reservationListData={data} />
                </li>
              );
            })}
        </ul>
        <button className='make-reservation'>예약하기</button>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .react-calendar {
    width: 500px;
    max-width: 100%;
    padding: 20px 30px;
    background: white;
    border: 1px solid #bebebe;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__tile--now {
    background: #ead5ea;
  }
  .react-calendar__tile--now:enabled:hover {
    background: #ead5ea;
  }
  .react-calendar__tile--now:enabled:focus {
    background: ${mainColor};
  }
  .react-calendar__navigation__label > span {
    font-size: 20px;
    font-weight: bold;
    color: ${mainColor};
  }
  .react-calendar__month-view__weekdays {
    abbr {
      color: ${mainColor};
      font-size: 17px;
      font-weight: bold;
    }
  }
  .react-calendar__tile {
    padding: 15px 0px;
    abbr {
      font-size: 15px;
    }
  }
  .react-calendar__tile:enabled:focus {
    background-color: ${mainColor};
    color: white;
  }
  .react-calendar__tile--active {
    color: white;
    background-color: ${mainColor};
  }
  .time-container {
    margin: 15px 0px 0px 30px;

    .able-time {
      font-size: 20px;
      font-weight: bold;
      color: ${mainColor};
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
      width: 240px;
      li {
        margin-right: 15px;
        margin-bottom: 15px;
      }
    }
    .make-reservation {
      margin: 25px 0px 0px 3px;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: ${mainColor};
      color: white;
      font-size: 16px;
    }
  }
`;

export default memo(MonthList);
