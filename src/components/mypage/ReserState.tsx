import * as MypageReserS from '../../styles/mypage/Reser';
interface reserData {
    resv_id: number;
    field_id: number;
    member_id: number;
    resv_date: string;
    resv_time: string;
    resv_state: number;
    resv_price: string;
    resv_field_name: string;
    resv_field_loca: string;
  }

const ReserState = ({reserData}:any) => { //임시 api완성시 고치기
    return(
        <MypageReserS.ReserDetailsWrap>
            <MypageReserS.ReserListWrap>
                <MypageReserS.PinIcon size={20} />
                <MypageReserS.ReserListText>
                    서울 특별시 종로구 당산역
                </MypageReserS.ReserListText>
            </MypageReserS.ReserListWrap>
            <MypageReserS.ReserListWrap>
                <MypageReserS.CalendarIcon size={20}/>
                <MypageReserS.ReserListText>
                    2023년 11월 24일
                </MypageReserS.ReserListText>
            </MypageReserS.ReserListWrap>
            <MypageReserS.ReserListWrap>
                <MypageReserS.TimeIcon size={20}/>
                <MypageReserS.ReserListText>
                    11:00
                </MypageReserS.ReserListText>
            </MypageReserS.ReserListWrap>
        </MypageReserS.ReserDetailsWrap>
    )
}

export default ReserState;