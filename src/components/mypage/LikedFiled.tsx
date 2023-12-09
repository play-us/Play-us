import { styled } from 'styled-components';
import * as MypageS from '../../styles/mypage/Mypage';

const comDatas = [1, 2, 3, 4, 5, 6]; //임시 데이터 배열

const LikedField = () => {
  return (
    <MypageS.MyListRight>
      <WishConBox>구장 좋아요 목록</WishConBox>
    </MypageS.MyListRight>
  );
};

const WishConBox = styled.div``;

export default LikedField;
