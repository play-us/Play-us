//마이페이지 커뮤니티 디테일 컴포넌트 css
import { styled } from 'styled-components';
import userpro from '../assets/images/mypageuserpro.png';


//마이페이지 오른쪽 커뮤니티 상세
export const CommuConBox = styled.div``;
export const CommuStateWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow:  1px 1px 15px  lightgray ;
  margin-bottom: 35px;
`;
// 작성글, 댓글 메뉴바
export const CommuStateBtnWrap = styled.li`
  width: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
`
export const CommuStateBtn = styled.div<{$commuState:string}>`
  padding: 25px 0;
  box-sizing: border-box;
  font-weight: bold;
`;
export const CommuStateBtn1 = styled(CommuStateBtn)`
  color: ${(props)=>{
    if(props.$commuState === 'ArticleList'){
      return "#3CE4A8";
    }else{
      return "#9d9d9d";
    }
  }};
`
export const CommuStateBtn2 = styled(CommuStateBtn)`
  color: ${(props)=>{
    if(props.$commuState === 'commentList'){
      return "#3CE4A8";
    }else{
      return "#9d9d9d";
    }
  }};
`
export const CommuStateBtnBot = styled.div<{$commuState:string}>`
  height: 5px;  
`
export const CommuStateBtnBot1 = styled(CommuStateBtnBot)`
  background-color: ${(props)=>{
      if(props.$commuState === 'ArticleList'){
        return "#3CE4A8";
      }
    }};
`
export const CommuStateBtnBot2 = styled(CommuStateBtnBot)`
 background-color: ${(props)=>{
      if(props.$commuState === 'commentList'){  
        return "#3CE4A8";
      }
    }};
`
// 작성 글 목록
export const CommuListWrap = styled.div`
`
export const CommuListBox = styled.ul`
 background-color: #ffffff;
 padding: 30px;
 border-radius: 10px;
 margin-bottom: 20px;
 box-sizing: border-box;
 text-align: start;
`
export const CommuListDate = styled.li` // 작성글 , 댓글 공통 css
 color: #9d9d9d;
`
export const CommuListTit = styled.li`
  margin: 20px 0;
  color: #3CE4A8;
  font-size: 1.25rem;
  font-weight: bold;
`
export const CommuListInfoWrap = styled.li` // 작성글 , 댓글 공통 css
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CommuListInfoLeft = styled.div` // 작성글 , 댓글 공통 css
  display: flex;
  align-items: center;
`
export const UserImg = styled.div` // 작성글 , 댓글 공통 css
  width: 40px;
  height: 40px;
  background-image: url(${userpro});
  background-size: contain;
  background-repeat: no-repeat;
`
export const UserName = styled.div` // 작성글 , 댓글 공통 css
  margin-left: 10px;
  color: #9d9d9d;
  font-weight: bold;
`
export const CommuListInfoRight = styled.div`
 display: flex;
`
export const UtilsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`
export const UtilsImg = styled.div`

`
export const UtilsNum = styled.p`
  color: #9d9d9d;
  margin-left: 2px;
`
// 작성 댓글 목록
export const CommentTxt = styled.p`
  color: #9d9d9d;
  margin-top: 20px;
`
