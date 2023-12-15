import { useEffect } from 'react';
import * as MypageReserS from '../../styles/mypage/Reser';
import moment from 'moment';
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

const ReserState = ({ data }: any) => {
  console.log('data.resvStartTime', moment(data.resvStartTime).format('HH:mm'));

  return (
    <MypageReserS.ReserDetailsWrap>
      <MypageReserS.ReserListWrap>
        <MypageReserS.PinIcon size={20} />
        <MypageReserS.ReserListText>{data.addr}</MypageReserS.ReserListText>
      </MypageReserS.ReserListWrap>
      <MypageReserS.ReserListWrap>
        <MypageReserS.CalendarIcon size={20} />
        <MypageReserS.ReserListText>
          {moment(data.resvDate).format('YYYY년 M월 D일')} &nbsp;
          {data.resvStartTime.slice(0, 5)} ~{data.resvEndTime.slice(0, 5)}
        </MypageReserS.ReserListText>
      </MypageReserS.ReserListWrap>
      <MypageReserS.ReserListWrap>
        <MypageReserS.TimeIcon size={20} />
        <MypageReserS.ReserListText>
          {data.resvState}시간 이용
        </MypageReserS.ReserListText>
      </MypageReserS.ReserListWrap>
    </MypageReserS.ReserDetailsWrap>
  );
};

export default ReserState;
