import styled from 'styled-components';
import { ICommunityRowData } from './RecruitTeamList';
import { Hand, MessageSquare, User } from 'lucide-react';
import { Col } from 'antd';
import React from 'react';
import axios from 'axios';
interface ButtonProps {
  backgroundColor?: string;
  marginRight?: string;
  fontWeight?: string;
  color?: string;
  onClick?: any;
}
enum groundType {
  futsal = '1',
  football = '2',
  basketball = '3',
}

const urlUpdateCommuLike = 'http://localhost:8080/community/communityWish'; //API 엔드포인트
const RecruitTeamInfo = (props: { item: ICommunityRowData }) => {
  const LikeButton = () => {
    const [liked, setLiked] = React.useState(false);

    // 좋아요 버튼 클릭 시 API 호출을 트리거하기 위한 useEffect를 사용합니다.
    React.useEffect(() => {
      // API 호출을 수행하는 함수
      const sendLikeToServer = async () => {
        try {
          // 좋아요 버튼이 클릭된 경우에만 API 호출
          if (liked) {
            // /community/communityWish
            const data = {
              commuId: '9',

              email: 'chu',

              state: '1',
              // 관심상태 (1 관심, 0 관심취소)
            };
            console.log(data);

            axios.post(urlUpdateCommuLike, data).then((response) => {
              console.log(response, '응답');
              // 새로고침
              // if(response === '성공'){
              // // '성공알럿'
              //   onClose()
              // }
              // else{
              //  //실패 앐럿
              //  //창 유지
              // }
            });
            // API 호출 (POST 요청)
            // const response = await (apiUrl, {
            // });

            // console.log('API 응답:', response.data);
          }
        } catch (error) {
          // 오류 처리 (예: 네트워크 문제 또는 API 오류)
          console.error('API 오류:', error);
        }
      };

      // 좋아요 버튼 클릭 상태가 변경될 때마다 API 호출 함수 호출
      sendLikeToServer();
    }, [liked]);

    const toggleLike = () => {
      setLiked((prevState) => !prevState);
    };

    return (
      <LikeBtn onClick={toggleLike}>
        {liked ? <Hand color="#F6E881" /> : <Hand color="#d1d1d1" />}
      </LikeBtn>
    );
  };
  const {
    memberCount,
    stadium,
    deadLine,
    likeCnt,
    commuTitle,
    name,
    commentCnt,
  } = props.item;
  // console.log(props, 'realProps');

  return (
    <Wrap>
      <Inwrap>
        <InfoHeaderWrap>
          <InfoHeader>
            <RecruitTeam
              style={{ marginRight: '5px' }}
              backgroundColor="#EFEFEF"
            >
              {/* 풋살 1 축구 2 농구 3 */}
              {stadium === groundType.futsal && (
                <span role="img" aria-label="Futsal">
                  👟
                </span>
              )}
              {stadium === groundType.football && (
                <span role="img" aria-label="Football">
                  ⚽
                </span>
              )}
              {stadium === groundType.basketball && (
                <span role="img" aria-label="Basketball">
                  🏀
                </span>
              )}
            </RecruitTeam>
            <RecruitTeam
              color="#3E85F4"
              backgroundColor="#F1F4F8"
              fontWeight="bold"
            >
              {memberCount}명
            </RecruitTeam>
          </InfoHeader>
          <div>
            <LikeButton />
          </div>
        </InfoHeaderWrap>
        <InfoDeadLine>마감일 | {deadLine}</InfoDeadLine>
        <InfoTitle>{commuTitle}</InfoTitle>
        <InfoFooterWrap>
          <div>
            <InfoUser>
              {/* <Col> {itemData.userImg === null ? <User /> : itemData.userImg}</Col> */}
              <ThumbImg
                src="https://lh3.googleusercontent.com/-LNDcyoUZV3U/AAAAAAAAAAI/AAAAAAAAAAA/AML38-szSEwtVxDGrb8lU9truJxdb9pwWQ/photo.jpg?sz=46"
                alt="프로필이미지"
              />
              {/* <Col>{commnnityName}</Col> */}
              <Col className="recruit_detail_name"> {name}</Col>
            </InfoUser>
          </div>
          <LikeCommentWrap>
            <LikeComment>
              <Hand color="#9C9C9C" />
              {likeCnt}
            </LikeComment>
            <LikeComment>
              <MessageSquare color="#9C9C9C" />
              {commentCnt}
            </LikeComment>
          </LikeCommentWrap>
        </InfoFooterWrap>
      </Inwrap>
      <div style={{ color: 'white' }}>{1}</div>
    </Wrap>
  );
};

export default RecruitTeamInfo;

const Wrap = styled.div`
  over-flow: hidden;
`;

const Inwrap = styled.div`
  padding: 25px 20px;
  border: 1px solid rgba(23, 23, 23, 0.08);
  border-radius: 12px;
  box-sizing: border-box;
`;

const RecruitTeam = styled.div<ButtonProps>`
  border-radius: 10px; /* 원하는 값으로 변경 */
  margin-right: ${(props) =>
    props.marginRight || '0'}; /* marginRight 프롭 값 또는 기본값 0 */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  max-height: 24px;
  color: ${(props) =>
    props.color || '#717171'}; /* marginRight 프롭 값 또는 기본값 0 */
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: 12px;
  padding: 0.3rem 0.4rem;
`;

const InfoHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoHeader = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: start;
`;
const InfoTitle = styled.div`
  font-size: 20px;
  height: 80px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -0.05em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
  overflow: hidden;
  text-align: left;
  margin-bottom: 50px;
`;

const InfoUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
const LikeComment = styled.div`
  display: flex;
  align-items: center;
  color: #9c9c9c;
  grid-gap: 5px;
  gap: 5px;
  font-size: 14px;

  & > svg {
    width: 18px;
  }
`;

const LikeCommentWrap = styled.div`
  display: flex;
  grid-gap: 10px;
  gap: 10px;
`;
const InfoFooterWrap = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
  letter-spacing: -0.04em;
  align-items: center;
  border-top: 1px solid rgba(23, 23, 23, 0.08);
  padding-top: 16px;
`;
const InfoDeadLine = styled.div`
  text-align: left;
  color: #979799;
  font-size: 1rem;
  margin-bottom: 15px;
`;
const InfoIcon = styled.div`
  text-align: left;
  color: #717171;
`;

const ThumbImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
`;
const LikeBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`;
