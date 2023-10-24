import { styled } from 'styled-components';
import * as MypageS from '../../styles/mypage/Mypage';
import CommuWishList from './CommuWishList';


const comDatas = [1,2,3,4,5,6]; //임시 데이터 배열

const CommuWishDetails = () => {
    return(
        <MypageS.MyListRight>
            <WishConBox>
                {comDatas.map(function(comData){
                    return(
                        <CommuWishList></CommuWishList>
                    );
                })}
            </WishConBox>
        </MypageS.MyListRight>
    )
}


const WishConBox = styled.div`
`


export default CommuWishDetails;