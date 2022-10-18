import styled from 'styled-components';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { mainColor, layout } from '../theme';

const ReservationForm = () => {
  const location = useLocation();
  const reservatedTime = location.search.slice(1, 13);
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');
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
    {
      id: 1,
      user_name: '박비비',
      user_birth: '201014',
      user_cotact: '01043214321',
      reason: '시술',
      date: '10월19일14:00시',
      is_noshow: true,
    },
  ]);

  const addList = () => {
    setId(id + 1);
    const newList = {
      id: id,
      user_name: name,
      user_birth: birth,
      user_cotact: contact,
      reason: reason,
      date: reservatedTime,
      is_noshow: false,
    };
    setReservatedList([...reservatedList, newList]);
  };
  console.log(reservatedList);

  return (
    <Section>
      <h1>예약자 정보</h1>
      <div>
        성함
        <input
          type='string'
          className='name'
          onChange={e => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        생년월일
        <input
          type='string'
          className='birthday'
          placeholder='6자리로 작성해주세요 ex)970425'
          onChange={e => {
            setBirth(e.target.value);
          }}
        ></input>
      </div>
      <div>
        연락처
        <input
          type='number'
          className='cellphone'
          onChange={e => {
            setContact(e.target.value);
          }}
        ></input>
      </div>
      <div>
        예약 내용
        <select
          className='reason'
          onChange={e => {
            setReason(e.target.value);
          }}
        >
          <option value='상담'>상담</option>
          <option value='시술'>시술</option>
        </select>
      </div>

      <div className='date'>
        예약일시<span>{reservatedTime}</span>
      </div>
      <button onClick={addList}>예약하기</button>
    </Section>
  );
};

const Section = styled.section`
  /* border: ${layout}; */
  width: 450px;
  margin: auto;
  margin-top: 100px;
  h1 {
    color: ${mainColor};
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }
  div {
    font-size: 20px;
    color: #333;
    margin: 15px 0px 0px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 300px;
      height: 40px;
      border: 1px solid darkgray;
      border-radius: 3px;
    }
    .reason {
      width: 300px;
      height: 40px;
      border: 1px solid darkgray;
      border-radius: 3px;
    }
  }
  button {
    width: 100%;
    margin: 30px 0px;
    padding: 10px 0px;
    border: none;
    border-radius: 5px;
    background-color: ${mainColor};
    color: white;
    font-size: 17px;
  }
`;

export default ReservationForm;
