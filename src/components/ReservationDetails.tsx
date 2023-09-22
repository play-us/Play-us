import * as MypageS from '../styles/Mypage';
import { MapPin, CalendarDays, Clock10 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../stores/Store';
import { reserFetch } from '../stores/features/GetReservationSlice';
import { useEffect, useRef } from 'react';

const ReservationDetails = () => {
  const reserDatas = useAppSelector((state) => {
    return state.getReserData.reserdata;
  });
  // 예약 데이터 dispatch
  const changeDispatch = useAppDispatch();
  // 무한 스크롤 intersection observer api
  const target = useRef<HTMLDivElement>(null);
  const targetCont = useRef<HTMLDivElement>(null);
  interface optionsType {
    root: HTMLDivElement | null;
    threshold: number;
  }
  const options: optionsType = {
    root: targetCont.current,
    threshold: 1,
  };
  const callback = (entries: any[], observer: any) => {
    entries.forEach((entry:any) => {
      if (entry.isIntersecting) {
        // 대상 요소가 화면에 나타났을 때 실행할 코드
        console.log('실행');
        changeDispatch(reserFetch());
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  if (target.current) {
    observer.observe(target.current);
  }
  return (
    <MypageS.MyListRight ref={targetCont}>
      <MypageS.ReserConWrap>
        {reserDatas.map(function (reserData, i) {
          return (
            <MypageS.ReserConBox>
              <MypageS.ReserTitleBox>
                <MypageS.ReserTitle>
                  {reserData.resv_field_name}
                </MypageS.ReserTitle>
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
                    <MypageS.ReserListText>
                      {reserData.resv_time}
                    </MypageS.ReserListText>
                  </MypageS.ReserListWrap>
                </MypageS.ReserDetailsWrap>
                <MypageS.ReserStateWrap>
                  <MypageS.ReserStateBtn>예약취소</MypageS.ReserStateBtn>
                </MypageS.ReserStateWrap>
              </MypageS.ReserStateBox>
            </MypageS.ReserConBox>
          );
        })}
        <div ref={target}></div> {/* 무한스크롤 맨밑 위치를 위한 태그 */}
      </MypageS.ReserConWrap>
    </MypageS.MyListRight>
  );
};

export default ReservationDetails;
