import * as MypageS from '../styles/Mypage';
import { MapPin, CalendarDays, Clock10 } from 'lucide-react';

const ReservationDetails = () => {
  return (
    <MypageS.MyListRight>
        <MypageS.ReserConBox>
          <MypageS.ReserTitleBox>
            <MypageS.ReserTitle>구장이름</MypageS.ReserTitle>
            <MypageS.ReserCurrent>예약완료</MypageS.ReserCurrent>
          </MypageS.ReserTitleBox>
          <MypageS.ReserStateBox>
            <MypageS.ReserDetailsWrap>
              <MypageS.ReserListWrap>
                <MapPin strokeWidth={2} size={20} />
                <MypageS.ReserListText>
                  서울특별시 종로구 당산역
                </MypageS.ReserListText>
              </MypageS.ReserListWrap>
              <MypageS.ReserListWrap>
                <CalendarDays strokeWidth={2} size={20} />
                <MypageS.ReserListText>2023년 11월 24일</MypageS.ReserListText>
              </MypageS.ReserListWrap>
              <MypageS.ReserListWrap>
                <Clock10 strokeWidth={2} size={20} />
                <MypageS.ReserListText>11:00</MypageS.ReserListText>
              </MypageS.ReserListWrap>
            </MypageS.ReserDetailsWrap>
            <MypageS.ReserStateWrap>
                <MypageS.ReserStateBtn>예약취소</MypageS.ReserStateBtn>
            </MypageS.ReserStateWrap>
          </MypageS.ReserStateBox>
        </MypageS.ReserConBox>
    </MypageS.MyListRight>
  );
};

export default ReservationDetails;
