import * as MypageS from '../styles/Mypage';
import { MapPin, CalendarDays, Clock10 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../stores/Store';

const ReservationDetails = () => {
  const reserDatas = useAppSelector((state) => {
    return state.getReserData.reserdata;
  });
  // console.log(reserDatas);
  return (
    <MypageS.MyListRight>
      {reserDatas.map(function (reserData, i) {
        return (
          <MypageS.ReserConBox>
            <MypageS.ReserTitleBox>
              <MypageS.ReserTitle>{reserData.resv_field_name}</MypageS.ReserTitle>
              <MypageS.ReserCurrent>예약완료</MypageS.ReserCurrent>
            </MypageS.ReserTitleBox>
            <MypageS.ReserStateBox>
              <MypageS.ReserDetailsWrap>
                <MypageS.ReserListWrap>
                  <MapPin strokeWidth={2} size={20} />
                  <MypageS.ReserListText>
                  {reserData.resv_field_loca}
                  </MypageS.ReserListText>
                </MypageS.ReserListWrap>
                <MypageS.ReserListWrap>
                  <CalendarDays strokeWidth={2} size={20} />
                  <MypageS.ReserListText>
                  {reserData.resv_date}
                  </MypageS.ReserListText>
                </MypageS.ReserListWrap>
                <MypageS.ReserListWrap>
                  <Clock10 strokeWidth={2} size={20} />
                  <MypageS.ReserListText>{reserData.resv_time}</MypageS.ReserListText>
                </MypageS.ReserListWrap>
              </MypageS.ReserDetailsWrap>
              <MypageS.ReserStateWrap>
                <MypageS.ReserStateBtn>예약취소</MypageS.ReserStateBtn>
              </MypageS.ReserStateWrap>
            </MypageS.ReserStateBox>
          </MypageS.ReserConBox>
        );
      })}
    </MypageS.MyListRight>
  );
};

export default ReservationDetails;
