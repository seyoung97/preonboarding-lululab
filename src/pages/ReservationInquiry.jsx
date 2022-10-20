import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/Modal/Modal';
import Error from '../components/Modal/Erro';
import { mainColor } from '../theme';

const ReservationInquiry = ({ reservatedList }) => {
  const navigate = useNavigate();

  const [inquiry, setInquiry] = useState('');
  const [isReservated, setIsReservated] = useState(null);
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleInquiry = () => {
    for (let i = 0; i < reservatedList.length; i++) {
      if (reservatedList[i]['user_contact'] === inquiry) {
        setIsReservated(reservatedList[i]);
        setOpen(true);
        setErrorOpen(false);
        break;
      } else {
        setIsReservated(null);
        setErrorOpen(true);
        setMessage('예약 내역이 없습니다.');
      }
    }
  };

  const goToInquiry = () => {
    navigate('/reservationInquiry');
  };

  return (
    <>
      <Section>
        <h1>예약 조회</h1>
        <h2>예약시 등록한 연락처를 입력해주세요.</h2>
        <div>
          연락처
          <input
            type='string'
            onChange={e => {
              setInquiry(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={handleInquiry}>조회하기</button>
      </Section>
      {open !== false ? <Modal data={isReservated} setOpenModal={setOpen} /> : null}
      {errorOpen !== false ? <Error setOpenModal={setErrorOpen} goTo={goToInquiry} message={message} /> : null}
    </>
  );
};

const Section = styled.section`
  width: 450px;
  margin: auto;
  margin-top: 100px;
  h1 {
    color: ${mainColor};
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }
  h2 {
    padding: 30px 0px;
    text-align: center;
    border-radius: 5px;
    background-color: #eeee;
    color: #424242;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 10px;
    font-size: 20px;
    input {
      width: 320px;
      height: 40px;
      border: 1px solid darkgray;
      border-radius: 3px;
    }
  }
  button {
    width: 100%;
    padding: 10px 0px;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    background-color: ${mainColor};
    color: white;
    font-size: 20px;
  }
`;

export default ReservationInquiry;
