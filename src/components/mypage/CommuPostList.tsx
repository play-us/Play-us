import * as MypageCommuS from '../../styles/mypage/MypageCommu';
import { PiHandPalmLight } from 'react-icons/pi';
import { BiSolidCommentDots } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
const CommuList = ()=>{
    return(
        <MypageCommuS.CommuListBox>
            <MypageCommuS.CommuListDate>2023.01.24 16:43</MypageCommuS.CommuListDate>
            <MypageCommuS.CommuListTit>정릉풋살 인원 모집합니다.</MypageCommuS.CommuListTit>
            <MypageCommuS.CommuListInfoWrap>
                <MypageCommuS.CommuListInfoLeft>
                    <MypageCommuS.UserImg></MypageCommuS.UserImg>
                    <MypageCommuS.UserName>홍범진</MypageCommuS.UserName>
                </MypageCommuS.CommuListInfoLeft>
                <MypageCommuS.CommuListInfoRight>
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
                </MypageCommuS.CommuListInfoRight>
            </MypageCommuS.CommuListInfoWrap>
        </MypageCommuS.CommuListBox>
    )
}
export default CommuList;
