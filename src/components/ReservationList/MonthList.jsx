import { useState } from 'react';
import styled from 'styled-components';
import { mainColor } from '../../theme';

import Calendar from 'react-calendar';
import SelectTime from './SelectTime';

import 'react-calendar/dist/Calendar.css';

const MonthList = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Section>
      <Calendar onChange={onChange} value={value} />
      <div className='time-container'>
        <div className='able-time'>예약 가능 시간</div>
        <SelectTime />
      </div>
    </Section>
  );
};

const Section = styled.section`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .react-calendar {
    width: 500px;
    max-width: 100%;
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
  }
`;

export default MonthList;
