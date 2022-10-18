import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor, layout } from '../theme';

const ReservationForm = ({ reservatedList, setReservatedList }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservatedTime = location.search.slice(1, 13);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');

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

  const goToInquiry = () => {
    alert('예약이 완료되었습니다.');
    navigate('/reservationInquiry');
  };

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
      <button
        onClick={() => {
          addList();
          goToInquiry();
        }}
      >
        예약하기
      </button>
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
