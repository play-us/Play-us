// 마이페이지 리뷰 디테일 css
import { styled } from 'styled-components';
import { FaStar, FaStarHalf } from 'react-icons/fa';

export const ReviewConBox = styled.article`
   background-color: #ffffff;
   padding: 30px 25px;
   box-sizing: border-box;
   text-align: left;
   border-radius: 10px;
   margin-bottom: 20px;
` ;
export const ReviewTopWrap= styled.div`
  display: flex;
  justify-content: space-between;
` ;

export const NameStarsWrap= styled.div`
  display: flex;
  align-items: center;
` ;
export const ReviewUserName= styled.p`
   margin-right: 10px;
   font-weight: bold;
` ;
export const StarsWrap= styled.div`
    position: relative;
    color: lightgray;
` ;
export const Star= styled(FaStar)`
    font-size: 1.125rem;
` ;
export const HalfStar= styled(FaStarHalf)`
    font-size: 1.125rem;
    overflow: hidden;
    position: absolute;
    &:nth-of-type(2){
        left: 0;
    }
    &:nth-of-type(4){
        left: 1.125rem;
    }
    &:nth-of-type(6){
        left: 2.25rem;
    }
    &:nth-of-type(8){
        left: 3.375rem;
    }
    &:nth-of-type(10){
        left: 4.5rem;
    }
` ;

export const ReviewReserDate= styled.p`
  color: #939393;
` ;

export const ReviewContent= styled.p`
  margin: 20px 0;
  font-weight: bold;
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.7;
   max-height: 3.4em; /* 인터넷 익스플로러 호환 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; /* CSS4에서 추가될 말줄임표 사용자 정의 */
` ;
export const ReviewUseDateTime= styled.p`
  color: #939393;
` ;