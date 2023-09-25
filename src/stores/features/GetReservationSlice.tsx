import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stat } from 'fs';

// 예약 데이터 thunk
const reserFetch = createAsyncThunk(
  'GetReservationSlice/reserFetch',
  async () => {
    const resp = await fetch('json/ReservationData.json');
    const data = await resp.json();
    return data;
  },
);
// 예약 데이터 slice
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

interface reserDataState {
  reserdata: reserData[];
  stateIndex: number;
}

const initialState: reserDataState = {
  reserdata: [],
  stateIndex: 0,
};

export const getReserDataSlice = createSlice({
  name: 'getReserData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(reserFetch.pending, (state, action) => {});
    builder.addCase(reserFetch.fulfilled, (state, action) => {
      const mocDatas = action.payload.reserData; // action을 통해 받아온 목데이터
      const stateDatas = state.reserdata; // 스테이트에 저장된 목데이터
      let stateIndex = state.stateIndex; // 스테이트에 다음 인덱스 번호를 저장하기 위한 변수
      let stateLastIndex: number = 0; // 스테이트로 다음 인덱스를 보내주기 위한 변수
      let mocDatasLength:number = mocDatas.length; // 목데이터 개수
      let stateDataLength = stateDatas.length; // 스테이트에 저장된 데이터 개수
      // 스테이트에  목데이터를 3개 씩 담아주는 구문
      if (mocDatasLength - stateDataLength >= 3 ) {
        // 총 목데이터 배열 길이에서 스테이트에 저장된 배열를 빼주고 3보다 크거나 같으면
        // 스테이트에 저장된 마지막 인데스 번호를 사용하여 반복문 사용해서 3개씩 push
        for (let i = stateIndex; i < stateIndex + 3; i++) {
          stateDatas.push(mocDatas[i]);
        }
        // 남은 목데이터가 3개 미만이거나 목데이터가 3개 미만일 때 스테이트에 담아주는 구문 
      } else if ( mocDatasLength - stateDataLength < 3) {
        // 목데이터 배열 길이가 0 보다 크고 목데이터 배열 길이에서 스테이트 배열 길이를 뺀 값이 3보다 작으면
        // 목데이터 배열 길이와 스테이트 길이를 뺀 값에서 마지막 인덱스를 더해주어 반복문 사용
        // 3개씩 push를 해주면 마지막 남는 데이터들은 3개 또는 3개 이하이기 때문에 (3개일때는 위 조건문에서 처리) 
        for (
          let i = stateIndex;
          i < stateIndex + mocDatasLength - stateDataLength;
          i++
        ) {
          stateDatas.push(mocDatas[i]);
        }
      }
      stateLastIndex = stateDatas.length; // 스테이트 배열의 길이가 그다음 인덱스 번호이기 때문에 
      state.stateIndex = stateLastIndex; // 저장한 마지막 인덱스 번호를 state에 보관
       // stateIndex = stateLastIndex; 이렇게 사용하면 stateIndex라는 변수에 담긴  참조주소가 바뀌는 것이므로 상태 업데이트가 감지가 안 되서 이렇게 사용하면 안됨
    });
    builder.addCase(reserFetch.rejected, (state, action) => {});
  },
});

export { reserFetch };
