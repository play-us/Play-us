import styled from 'styled-components';
import { ICommunityRowData } from './RecruitTeamList';
import { Hand, MessageSquare, User } from 'lucide-react';
import { Col, Row } from 'antd';
interface ButtonProps {
  backgroundColor?: string;
  marginRight?: string;
  color?: string;
}

const RecruitTeamInfo = (props: { item: ICommunityRowData }) => {
  const { item } = props;
  console.log(item);
  const {
    memberCount,
    stadium,
    deadLine,
    likeCnt,
    commuTitle,
    name,
    commentCnt,
  } = item;

  return (
    // <div style={{ height: '340px' }}>
    <InfoWrap>
      <InfoHeaderWrap>
        <InfoHeader>
          <ButtonWrap>{stadium}</ButtonWrap>
          <ButtonWrap color="rgb(62, 133, 244)" backgroundColor="EFEFEF">
            {memberCount}
          </ButtonWrap>
        </InfoHeader>
        <div>
          <Hand color="#d1d1d1" />
        </div>
      </InfoHeaderWrap>
      <InfoDeadLine>마감일 | {deadLine}</InfoDeadLine>
      <InfoTitle>{commuTitle}</InfoTitle>
      <InfoFooterWrap>
        <div>
          <InfoUser>
            {/* <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col> */}
            <InfoIcon>
              <User color="#d1d1d1" />
            </InfoIcon>
            {/* <Col>{commnnityName}</Col> */}
            <Col className="recruit_detail_name"> {name}</Col>
          </InfoUser>
        </div>
        <div>
          <Hand color="#d1d1d1" />
          <MessageSquare color="#d1d1d1" />
        </div>
      </InfoFooterWrap>
    </InfoWrap>
    // </div>
  );
};

export default RecruitTeamInfo;

const InfoWrap = styled.div`
  flex: 1;
  max-width: calc(100% / 3);
  height: 100%;
  border-radius: 30px;
  padding: 20px 25px 0;
  border: 2px solid #d1d1d1;
`;
const ButtonWrap = styled.button<ButtonProps>`
  border-radius: 10px; /* 원하는 값으로 변경 */
  margin-right: ${(props) =>
    props.marginRight || '0'}; /* marginRight 프롭 값 또는 기본값 0 */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  max-height: 24px;
  color: ${(props) =>
    props.color || '#717171'}; /* marginRight 프롭 값 또는 기본값 0 */
`;

const InfoHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoHeader = styled.div`
  margin-bottom: 15px;
`;
const InfoTitle = styled.div`
  font-size: 17px;
  min-height: 50px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: -0.05em;
  margin: 7px 15px 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
`;

const InfoUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.125rem;
`;

const Contents = styled.pre`
  white-space: pre-line;
  word-break: keep-all;
  font-size: 1.125rem;
  line-height: 1.7;
  overflow: auto;
  margin: 10px 0;
  text-align: left;
`;

const InfoFooterWrap = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
  letter-spacing: -0.04em;
  align-items: center;
  border-top: 1px solid #d1d1d1;
`;
const InfoDeadLine = styled.div`
  text-align: left;
  color: #999;
  margin-bottom: 15px;
`;
const InfoIcon = styled.div`
  text-align: left;
  color: #717171'
`;
