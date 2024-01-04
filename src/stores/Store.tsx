import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { MenuSlice } from './features/MypageMenuSlice';
import { getReserDataSlice } from './features/GetReservationSlice';
import { authenticationSlice } from './features/AuthenticationSlice';

const reducers = combineReducers({
  menu: MenuSlice.reducer,
  getReserData: getReserDataSlice.reducer,
  user: authenticationSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
