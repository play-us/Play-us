import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
export interface User {
  kakaoId: number;
  password: string;
  email: string;
  name: string;
  area: string;
  phone: string;
}
interface UserState {
  users: User[];
}
const initialState: UserState = {
  users: [],
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{
        kakaoId: number;
        password: string;
        email: string;
        name: string;
        area: string;
        phone: string;
      }>,
    ) => {
      return [
        state,
        {
          kakaoId: action.payload.kakaoId,
          password: action.payload.password,
          email: action.payload.email,
          name: action.payload.name,
          area: action.payload.area,
          phone: action.payload.phone,
        },
      ];
    },
  },
});

export default UserSlice.reducer;
export const { addUser } = UserSlice.actions;
