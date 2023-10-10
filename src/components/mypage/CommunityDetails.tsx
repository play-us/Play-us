import { useState } from 'react';
import * as MypageS from '../../styles/mypage/Mypage';
import * as MypageCommuS from '../../styles/mypage/MypageCommu';
import CommuPostList from './CommuPostList';
import CommuCoList from './CommuCmList';


const CommunityDetails = () => {
    const [commuState,setCoummuState] = useState('ArticleList');
    const comDatas = [1,2,3,4,5,6]; //임시 데이터 배열
    return(
        <MypageS.MyListRight>
            <MypageCommuS.CommuConBox>
                <MypageCommuS.CommuStateWrap>
                    <MypageCommuS.CommuStateBtnWrap onClick={()=>{setCoummuState('ArticleList')}}>
                        <MypageCommuS.CommuStateBtn1 $commuState={commuState}>작성 글</MypageCommuS.CommuStateBtn1>
                        <MypageCommuS.CommuStateBtnBot1 $commuState={commuState}></MypageCommuS.CommuStateBtnBot1>
                    </MypageCommuS.CommuStateBtnWrap>
                    <MypageCommuS.CommuStateBtnWrap onClick={()=>{setCoummuState('commentList')}}>
                        <MypageCommuS.CommuStateBtn2 $commuState={commuState}>작성 댓글</MypageCommuS.CommuStateBtn2>
                        <MypageCommuS.CommuStateBtnBot2 $commuState={commuState}></MypageCommuS.CommuStateBtnBot2>
                    </MypageCommuS.CommuStateBtnWrap>
                </MypageCommuS.CommuStateWrap>
                <MypageCommuS.CommuListWrap>
                    {comDatas.map(function(comData){
                            if(commuState === 'ArticleList'){
                               return(<CommuPostList></CommuPostList>);
                            }else{
                                return(null);
                            }
                    })}
                    {comDatas.map(function(comData){
                            if(commuState === 'commentList'){
                               return(<CommuCoList></CommuCoList>);
                            }else{
                                return(null);
                            }
                    })}
                </MypageCommuS.CommuListWrap>
            </MypageCommuS.CommuConBox>
        </MypageS.MyListRight>
    )
}

export default CommunityDetails;