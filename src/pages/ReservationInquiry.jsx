import styled from 'styled-components';
import { mainColor, layout } from '../theme';

const ReservationInquiry = ({ reservatedList, setReservatedList }) => {
  console.log(reservatedList);
  return (
    <Section>
      <h1>예약 조회</h1>
      <h2>예약시 등록한 연락처를 입력해주세요.</h2>
      <div>
        연락처 <input></input>
      </div>
    </Section>
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
    margin: 20px 30px;
    font-size: 20px;
    input {
      width: 300px;
      height: 40px;
      border: 1px solid darkgray;
      border-radius: 3px;
    }
  }
`;

export default ReservationInquiry;
