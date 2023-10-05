import styled from 'styled-components';

export const LoginLogo = () => {
  return (
    <Wrapper>
      <Admin>Play-Us</Admin>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  align-items: center;
  margin: 12px;
`;

const Fashionplus = styled.span`
  font-size: 48px;
  color: #ffffff;
  margin-right: 12px;
`;

const Admin = styled.span`
  font-size: 48px;
  color: #7cabe2;
`;
