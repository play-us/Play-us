import { useState } from 'react';
import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageCommuS from '../../styles/mypage/Community';
import CommuPostList from './CommuPostList';

const comDatas = [1,2,3,4,5,6]; //임시 데이터 배열

const CommunityDetails = () => {
    return(
        <MypageS.MyListRight>
            <MypageCommuS.CommuConBox>
                <MypageCommuS.CommuListWrap>
                    {comDatas.map(function(comData){
                        return(<CommuPostList></CommuPostList>);
                    })}
                </MypageCommuS.CommuListWrap>
            </MypageCommuS.CommuConBox>
        </MypageS.MyListRight>
    )
}

export default CommunityDetails;