import * as MypageReserS from '../../styles/mypage/MypageReser';
import * as MypageS from '../../styles/mypage/Mypage';
import { MapPin, CalendarDays, Clock10 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../stores/Store';
import { reserFetch } from '../../stores/features/GetReservationSlice';
import { useRef, useState } from 'react';
import CancleModal from './CancleModal';
import ReviewWriteModal from './ReviewWriteModal';

const ReservationDetails = () => {
  const reserDatas = useAppSelector((state) => {
    return state.getReserData.reserdata;
  });
  // 예약내역 데이터 호출 dispatch
  const mocDataDispatch = useAppDispatch();
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
        mocDataDispatch(reserFetch());
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  if (target.current) {
    observer.observe(target.current);
  }
  // 예약취소,후기등록 모달  state
  const [cModalState, setCModalState] = useState<boolean>(false);
  const [wModalState, setWModalState] = useState<boolean>(false);
  // 모달창에 전달할 해당 예약데이터 인덱스 번호 state
  const [dataIndex, setDataIndex] = useState<number>(0);
  // 모달 상태에 따라 변수에 담아줄 컴포넌트
  let showModal: null | JSX.Element = null;
  if (cModalState === true) {
    showModal = <CancleModal setCModalState={setCModalState} dataIndex={dataIndex}></CancleModal>;
  }else if(wModalState === true) {
    showModal = <ReviewWriteModal setWModalState ={setWModalState}></ReviewWriteModal>;
  }
  return (
    <MypageS.MyListRight ref={targetCont}>
      {/* 예약취소 모달 */}
      {showModal}
      <MypageReserS.ReserConWrap>
        {reserDatas.map(function (reserData, i) {
          return (
            <MypageReserS.ReserConBox>
              <MypageReserS.ReserTitleBox>
                <MypageReserS.ReserTitle>
                  {reserData.resv_field_name}
                </MypageReserS.ReserTitle>
                {reserData.resv_state === 0 && (
                  <MypageReserS.ReserCurrent>
                    예약취소
                  </MypageReserS.ReserCurrent>
                )}
                {reserData.resv_state === 1 && (
                  <MypageReserS.ReserCurrent>
                    예약완료
                  </MypageReserS.ReserCurrent>
                )}
                {reserData.resv_state === 2 && (
                  <MypageReserS.ReserCurrent>
                    사용완료
                  </MypageReserS.ReserCurrent>
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
                    <MypageReserS.ReserStateBtn
                      onClick={() => {
                        setCModalState(true);
                        setDataIndex(i);
                      }}
                    >
                      예약취소
                    </MypageReserS.ReserStateBtn>
                  )}
                  {reserData.resv_state === 2 && (
                    <MypageReserS.ReserStateBtn
                      onClick={() => {
                        setWModalState(true);
                      }}
                    >
                      후기등록
                    </MypageReserS.ReserStateBtn>
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
