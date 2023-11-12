import * as MypageCommuS from '../../styles/mypage/Community';
import { PiHandPalmLight } from 'react-icons/pi';
import { BiSolidCommentDots } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
const CommuList = ()=>{
    return(
        <MypageCommuS.CommuListBox $padding={"30px"}>
            <MypageCommuS.CommuListDate>2023.01.24 16:43</MypageCommuS.CommuListDate>
            <MypageCommuS.CommuPostListTit>정릉풋살 인원 모집합니다.</MypageCommuS.CommuPostListTit>
            <MypageCommuS.CommuListInfoWrap>
                <MypageCommuS.CommuPostListInfo>
                    <MypageCommuS.UtilsWrap>
                        <PiHandPalmLight size={23} color='#9d9d9d'/>
                        <MypageCommuS.UtilsNum>1</MypageCommuS.UtilsNum>
                    </MypageCommuS.UtilsWrap>
                    <MypageCommuS.UtilsWrap>
                        <BiSolidCommentDots size={23} color='#9d9d9d'/>
                        <MypageCommuS.UtilsNum>1</MypageCommuS.UtilsNum>
                    </MypageCommuS.UtilsWrap>
                    <MypageCommuS.UtilsWrap>
                        <FaEye size={23} color='#9d9d9d'/>
                        <MypageCommuS.UtilsNum>1</MypageCommuS.UtilsNum>
                    </MypageCommuS.UtilsWrap>
                </MypageCommuS.CommuPostListInfo>
            </MypageCommuS.CommuListInfoWrap>
        </MypageCommuS.CommuListBox>
    )
}
export default CommuList;
