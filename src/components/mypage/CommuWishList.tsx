import { styled } from 'styled-components';
import { BsHeart } from 'react-icons/bs';
import ReserState from './ReserState';

const CommuWishList = () =>{

    return(
        <WishListWrap>
            <WishImg></WishImg>
            <WishConWrap>
                <WishFieldName>수원 스타필드 이마트 트레이더스 풋살장</WishFieldName>
                <ReserState></ReserState>
            </WishConWrap>
            <WishIconWrap>
                <WishIcon fontSize={42} color='#dadada'/>
            </WishIconWrap>
        </WishListWrap>
    )
}


const WishListWrap = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: #ffffff;
   padding: 30px 25px;
   box-sizing: border-box;
   text-align: left;
   border-radius: 10px;
   margin-bottom: 20px;
`

const WishImg = styled.div`
    background-image: url("https://plab-football.s3.amazonaws.com/media/gwangju-shinhwa-1-goal.jpg");
    width: 31.25%;
    flex-shrink: 0;
    padding-top: 31.25%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
`
const WishConWrap = styled.div`
    padding-left: 40px;
    box-sizing: border-box;
`
const WishFieldName = styled.p`
    width: 90%;
    white-space:pre-line;
    font-size: 1.875rem;
    font-weight: bold;
    color: #464646;
    line-height : 35px;
    margin-bottom: 20px;
`
const WishInfoWrap = styled.div`
`
const WishInfoIcon = styled.div`
`
const WishInfoTxt = styled.p`
`
const WishIconWrap = styled.div`
    display: flex;
    align-items: end;
`
const WishIcon = styled(BsHeart)`
    text-align: end;
`

export default CommuWishList;