import * as MypageReserS from '../../styles/mypage/Reser';
import { IFieldResvData } from '../../utils/FieldType';
import { useState, SetStateAction, Dispatch } from 'react';
import ReserState from './ReserState';

interface IResvItemProp {
  data: IFieldResvData;
  index: number;
  setData: Dispatch<SetStateAction<number>>;
  setCModalState: Dispatch<SetStateAction<boolean>>;
  setWModalState: Dispatch<SetStateAction<boolean>>;
}

const ResvListItem = (props: IResvItemProp) => {
  const { data, index, setData, setCModalState, setWModalState } = props;
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
          {data.resvState === '1' && ( //함수로 분기처리
            <MypageReserS.ReserStateBtn
              $resvState={data.resvState}
              onClick={() => {
                // 무명함수 사용 안 하기
                setCModalState(true);
                setData(index);
              }}
            >
              예약취소
            </MypageReserS.ReserStateBtn>
          )}
          {data.resvState === '2' && (
            <MypageReserS.ReserStateBtn
              $resvState={data.resvState}
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
};

export default ResvListItem;
