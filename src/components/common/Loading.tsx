import styled from 'styled-components';
const LoadingComponent = () => {
  return <Wrapper>데이터를 로딩중입니다...</Wrapper>;
};

export default LoadingComponent;

const Wrapper = styled.div`
  width: 100% !important;
  height: 300px;
  background-color: #f1f1f1;
  color: #4b4b4b;
  font-size: 18px;
  font-weight: 500;
  margin: 30px 0;
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
