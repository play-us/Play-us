import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
  resv_field_name:string;
  resv_field_loca:string;
}

interface reserDataState {
  reserdata: reserData[];
}

const initialState: reserDataState = {
  reserdata: [],
};

export const getReserDataSlice = createSlice({
  name: 'getReserData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(reserFetch.pending, (state, action) => {
    });
    builder.addCase(reserFetch.fulfilled, (state, action) => {
        const actData = action.payload.reserData ;
        console.log(actData);
        state.reserdata = [];
        for(let i = 0; i < actData.length; i++){
            state.reserdata.push(actData[i]);
        }
        console.log(state.reserdata);
        // state.reserdata = action.payload;/
    });
    builder.addCase(reserFetch.rejected, (state, action) => {
    });
  },
});

export { reserFetch };