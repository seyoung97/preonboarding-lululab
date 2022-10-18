import { memo } from 'react';
import styled from 'styled-components';
import { mainColor } from '../../theme';

const SelectTime = ({ reservationListData, id, handleTimeClick }) => {
  const activeBtn = () => {
    if (reservationListData.isReservated === true) {
      return true;
    }
  };

  return (
    <Button
      disabled={!activeBtn()}
      id={id}
      onClick={e => {
        handleTimeClick(e);
      }}
    >
      {reservationListData.time}
    </Button>
  );
};

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ead5ea;
  font-size: 17px;
  &:hover,
  :focus {
    background-color: ${mainColor};
    color: white;
    cursor: pointer;
  }
  &:disabled {
    background-color: #ddd;
    color: black;
    cursor: not-allowed;
  }
`;

export default memo(SelectTime);
