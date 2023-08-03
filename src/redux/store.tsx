import { ThunkAction, Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import ticketReducer from './datveSlice';
import sukienReducer from './sukienSlice';
import lienheReducer from './lienheSlice'
import nganhangReducer from './nganhangSlice';

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    sukien: sukienReducer,
    lienhe: lienheReducer,
    nganhang: nganhangReducer,
  },  
});
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Define the correct type for dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;
