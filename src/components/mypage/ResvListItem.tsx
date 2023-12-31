import * as MypageReserS from '../../styles/mypage/Reser';
import { IFieldResvData } from '../../utils/FieldType';
import { useState, SetStateAction, Dispatch, useEffect } from 'react';
import ReserState from './ReserState';
import moment from 'moment';

interface IResvItemProp {
  data: IFieldResvData;
  index: number;
  setData: Dispatch<SetStateAction<number>>;
  setCModalState: Dispatch<SetStateAction<boolean>>;
  setWModalState: Dispatch<SetStateAction<boolean>>;
}

const ResvListItem = (props: IResvItemProp) => {
  const { data, index, setData, setCModalState, setWModalState } = props;
  const [timeOver, setTimeOver] = useState<boolean>(false);
  const today = new Date();

  useEffect(() => {
    if (
      moment(data.resvDate).format('YYYY-MM-DD') <
      moment(today).format('YYYY-MM-DD')
    ) {
      setTimeOver(true);
    } else {
      setTimeOver(false);
    }
  }, []);
  return (
    <MypageReserS.ReserConBox key={index}>
      <MypageReserS.ReserTitleBox>
        <MypageReserS.ReserTitle>{data.fieldNm}</MypageReserS.ReserTitle>
        <MypageReserS.ReserCurrent $resvState={data.resvState}>
          {data.resvStateNm}
        </MypageReserS.ReserCurrent>
      </MypageReserS.ReserTitleBox>
      <MypageReserS.ReserStateBox>
        <ReserState data={data}></ReserState>
        <MypageReserS.ReserStateWrap>
          {data.resvState === '1' &&
            !timeOver && ( //함수로 분기처리
              <MypageReserS.ReserStateBtn
                $resvState={data.resvState}
                onClick={() => {
                  setCModalState(true);
                  setData(index);
                }}
              >
                예약취소
              </MypageReserS.ReserStateBtn>
            )}
          {data.resvState === '1' &&
            timeOver &&
            data.reviewYn === '0' && ( //함수로 분기처리
              <MypageReserS.ReserStateBtn
                $resvState={data.resvState}
                onClick={() => {
                  setWModalState(true);
                  setData(index);
                }}
              >
                후기등록
              </MypageReserS.ReserStateBtn>
            )}
          {data.resvState === '1' &&
            timeOver &&
            data.reviewYn === '1' && ( //함수로 분기처리
              <MypageReserS.ReserStateBtn $resvState={data.resvState}>
                후기등록 완료
              </MypageReserS.ReserStateBtn>
            )}
        </MypageReserS.ReserStateWrap>
      </MypageReserS.ReserStateBox>
    </MypageReserS.ReserConBox>
  );
};

export default ResvListItem;
