import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { mainColor, layout } from '../theme';

const ReservationForm = () => {
  const location = useLocation();

  return (
    <Section>
      <h1>예약자 정보</h1>
      <div>
        성함<input type='string' className='name'></input>
      </div>
      <div>
        생년월일<input type='string' className='birthday'></input>{' '}
      </div>
      <div>
        연락처<input type='string' className='cellphone'></input>
      </div>
      <div>
        예약 내용
        <select className='reason'>
          <option value='0'>상담</option>
          <option value='1'>시술</option>
        </select>
      </div>

      <div className='date'>
        예약일시<span>10월 17일 {location.search}시</span>
      </div>
      <button>예약하기</button>
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
