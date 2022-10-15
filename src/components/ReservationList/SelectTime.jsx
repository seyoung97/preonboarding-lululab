import styled from 'styled-components';
import { mainColor } from '../../theme';

const SelectTime = () => {
  return <Button>10:00</Button>;
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
  }
`;

export default SelectTime;
