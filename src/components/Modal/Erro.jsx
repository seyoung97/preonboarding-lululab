import styled from 'styled-components';
import { mainColor } from '../../theme';

const Error = ({ message, setOpenModal, goTo }) => {
  return (
    <Section>
      <div className='overlay-style' />
      <div className='modal-style'>
        <div>{message}</div>
        <div>
          <button
            className='close-modal'
            onClick={() => {
              setOpenModal(false);
              goTo();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  .overlay-style {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal-style {
    position: fixed;
    width: 420px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 50px;
    background-color: #fff;
    border: 2px solid ${mainColor};
    border-radius: 10px;
    div {
      margin-bottom: 10px;
      text-align: center;
      font-size: 19px;
    }
    .close-modal {
      margin-top: 35px;
      padding: 5px 20px;
      border: none;
      border-radius: 5px;
      color: white;
      background-color: ${mainColor};
      font-size: 18px;
    }
  }
`;

export default Error;
