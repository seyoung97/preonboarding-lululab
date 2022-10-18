import styled from 'styled-components';
import Logo from '../../assets/images/Header/lululab-logo.png';
import { mainColor } from '../../theme';

const Header = () => {
  return (
    <Section>
      <img className='logo' src={Logo} alt='lululab logo'></img>
      <div>병원 예약</div>
      <div>예약 조회</div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 3px 7px 1px rgb(0 0 0 / 5%);
  .logo {
    width: 200px;
    margin: 50px 70px 20px 100px;
  }
  div {
    margin: 40px 50px 0px 0px;
    font-size: 22px;
    color: ${mainColor};
  }
`;

export default Header;
