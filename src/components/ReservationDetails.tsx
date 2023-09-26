import * as MypageReserS from '../styles/MypageReser';
import * as MypageS from '../styles/Mypage';
import { MapPin, CalendarDays, Clock10 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../stores/Store';
import { reserFetch } from '../stores/features/GetReservationSlice';
import { useEffect, useRef } from 'react';
import React, { SetStateAction, Dispatch } from 'react'
interface setModalProp {
  setModalState : Dispatch<SetStateAction<boolean>>;
}
const ReservationDetails = (props:setModalProp) => {
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
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        // 대상 태그(<div ref={target}></div>)가 화면에 나타났을 때 실행할 코드
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
      <MypageReserS.ReserConWrap>
        {reserDatas.map(function (reserData, i) {
          return (
            <MypageReserS.ReserConBox>
              <MypageReserS.ReserTitleBox>
                <MypageReserS.ReserTitle>
                  {reserData.resv_field_name}
                </MypageReserS.ReserTitle>
                {reserData.resv_state === 0 && (
                  <MypageReserS.ReserCurrent>예약취소</MypageReserS.ReserCurrent>
                )}
                {reserData.resv_state === 1 && (
                  <MypageReserS.ReserCurrent>예약완료</MypageReserS.ReserCurrent>
                )}
                {reserData.resv_state === 2 && (
                  <MypageReserS.ReserCurrent>사용완료</MypageReserS.ReserCurrent>
                )}
              </MypageReserS.ReserTitleBox>
              <MypageReserS.ReserStateBox>
                <MypageReserS.ReserDetailsWrap>
                  <MypageReserS.ReserListWrap>
                    <MapPin strokeWidth={2} size={20} />
                    <MypageReserS.ReserListText>
                      {reserData.resv_field_loca}
                    </MypageReserS.ReserListText>
                  </MypageReserS.ReserListWrap>
                  <MypageReserS.ReserListWrap>
                    <CalendarDays strokeWidth={2} size={20} />
                    <MypageReserS.ReserListText>
                      {reserData.resv_date}
                    </MypageReserS.ReserListText>
                  </MypageReserS.ReserListWrap>
                  <MypageReserS.ReserListWrap>
                    <Clock10 strokeWidth={2} size={20} />
                    <MypageReserS.ReserListText>
                      {reserData.resv_time}
                    </MypageReserS.ReserListText>
                  </MypageReserS.ReserListWrap>
                </MypageReserS.ReserDetailsWrap>
                <MypageReserS.ReserStateWrap>
                  {reserData.resv_state === 1 && (
                    <MypageReserS.ReserStateBtn>예약취소</MypageReserS.ReserStateBtn>
                  )}
                  {reserData.resv_state === 2 && (
                    <MypageReserS.ReserStateBtn>후기등록</MypageReserS.ReserStateBtn>
                  )}
                </MypageReserS.ReserStateWrap>
              </MypageReserS.ReserStateBox>
            </MypageReserS.ReserConBox>
          );
        })}
        <div ref={target}></div> {/* 무한스크롤 맨밑 위치를 위한 태그 */}
      </MypageReserS.ReserConWrap>
    </MypageS.MyListRight>
  );
};

export default ReservationDetails;
