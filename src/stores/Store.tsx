import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { MenuSlice } from './features/MypageMenuSlice';
import { getReserDataSlice } from './features/GetReservationSlice';
import { authenticationSlice } from './features/AuthenticationSlice';
export const store = configureStore({
  reducer: {
    menu: MenuSlice.reducer,
    getReserData: getReserDataSlice.reducer,
    user: authenticationSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
