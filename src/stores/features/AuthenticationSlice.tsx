import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { getMember } from '../../service/UserApi';

export interface IAuthentication {
  //isProcessingRequest: boolean;
  accessToken?: string;
  name: '';
  email: '';
  phone: '';
  isLoading: false; // optional
  isLogin: boolean;
}
const initialState: IAuthentication = {
  isLogin: false,
  name: '',
  email: '',
  phone: '',
  isLoading: false,
};
export const authenticationSlice = createSlice({
  name: 'authentication',
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
    // start: (state) => {
    //   return {
    //     ...state,
    //     isProcessingRequest: true,
    //   };
    // },
    // success: (state, action: PayloadAction<any>) => {
    //   return {
    //     ...state,
    //     isProcessingRequest: false,
    //   };
    // },
    // error: (state, action: PayloadAction<string>) => {
    //   return {
    //     ...state,
    //     isProcessingRequest: false,
    //   };
    // },
  },
});
export const authenticateUser =
  (email: string, password: string) => async (dispatch: any) => {
    const navigate = useNavigate();
    console.log('email&pw', email, password);

    /*     try {
      const authData = await getMember(email, password);
      console.log('authData', authData);

      // setTokens(authData.data);
      // dispatch(success(authData.data));
      navigate('/');
    } catch (err: any) {
      console.log('err');

      //dispatch(error(err));
    } */
  };
export const { loginUser, clearUser } = authenticationSlice.actions;
//export const { start, success, error } = authenticationSlice.actions;
//export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
