import { createSlice } from '@reduxjs/toolkit';

export interface IAuthentication {
  accessToken?: string;
  name: '';
  email: '';
  phone: '';
  isLogin: boolean;
}
const initialState: IAuthentication = {
  isLogin: false,
  name: '',
  email: '',
  phone: '',
};
export const authenticationSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.isLogin = true;
    },

    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.isLogin = false;
    },
  },
});

export const { loginUser, clearUser } = authenticationSlice.actions;
export const userInfo = (state: { user: IAuthentication }) => state.user;
export const authenticationReducer = authenticationSlice.reducer;
