//마이페이지 커뮤니티 디테일 컴포넌트 css
import { styled } from 'styled-components';
import userpro from '../../assets/images/mypageuserpro.png';
import chat from '../../assets/images/mypagechat.png';


//마이페이지 오른쪽 커뮤니티 상세
export const CommuConBox = styled.div``;
  
// 작성 글 목록
export const CommuListWrap = styled.div` // 작성글 , 댓글 공통 css
`
export const CommuListBox = styled.ul<{$padding:string}>`  // 작성글 , 댓글 공통 css
 background-color: #ffffff;
 padding: ${(props)=> props.$padding};
 border-radius: 10px;
 margin-bottom: 20px;
 box-sizing: border-box;
 text-align: start;
`
export const CommuListDate = styled.li` // 작성글 , 댓글 공통 css
 color: #9d9d9d;
`
export const CommuPostListTit = styled.li`
  margin: 20px 0 40px 0;
  color: #646464;
  font-size: 1.25rem;
  font-weight: bold;
`
export const CommuListInfoWrap = styled.li` // 작성글 , 댓글 공통 css
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const CommuPostListInfo = styled.div` 
 display: flex;
`
export const UtilsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`
export const UtilsImg = styled.div`

`
export const UtilsNum = styled.p`
  color: #9d9d9d;
  margin-left: 2px;
`
// 작성 댓글 목록

export const CommentImg = styled.div` 
 background-image: url(${chat});
 width: 64px;
 height: 64px;
 background-size: contain;
`

export const CommentTxtWrap = styled.div`
  font-weight: bold;
` 

export const CommentPostTitle = styled.p`
  color: #9d9d9d;
` 
export const CommentTxt = styled.p`
  font-size: 1.125rem;
  margin-top: 20px;
`

