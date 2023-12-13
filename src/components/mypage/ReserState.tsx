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
  let YYYYMMDD = '';
  let TT = '';

  useEffect(() => {
    //ßdevideDate();
    console.log('data', data);
  }, []);
  const devideDate: any = () => {
    if (data) {
      YYYYMMDD = moment(data.resvDate).format('L');
      TT = moment(data.resvDate).format('LT');
    }
  };
  return (
    <MypageReserS.ReserDetailsWrap>
      <MypageReserS.ReserListWrap>
        <MypageReserS.PinIcon size={20} />
        <MypageReserS.ReserListText>{data.addr}</MypageReserS.ReserListText>
      </MypageReserS.ReserListWrap>
      <MypageReserS.ReserListWrap>
        <MypageReserS.CalendarIcon size={20} />
        <MypageReserS.ReserListText>{YYYYMMDD}</MypageReserS.ReserListText>
      </MypageReserS.ReserListWrap>
      <MypageReserS.ReserListWrap>
        <MypageReserS.TimeIcon size={20} />
        <MypageReserS.ReserListText>{TT}</MypageReserS.ReserListText>
      </MypageReserS.ReserListWrap>
    </MypageReserS.ReserDetailsWrap>
  );
};

export default ReserState;
