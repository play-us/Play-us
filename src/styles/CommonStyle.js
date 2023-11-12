import styled from 'styled-components';
export const primaryColor = '#3CE4A8';
export const SecondaryColor = '';
export const RedColor = '#ff4d4f';
export const OpacityPrimaryBGColor = 'rgb(53 246 181 / 10%)';
export const OpacityPrimaryTextColor = 'rgb(3 187 121)';

const PageTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #dfe0e1;
  box-sizing: border-box;
`;

const PageTitle = styled.div`
  font-size: 1.5rem;
  text-align: left;
`;

const DarkButton = styled.button`
  background-color: #333333;
  color: #fff;
  border-radius: 25px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  &:hover {
    background-color: #8a8a8a;
  }
`;

export const PageStyle = {
  PageTopWrap,
  PageTitle,
};

export const ButtonStyle = {
  DarkButton,
};
