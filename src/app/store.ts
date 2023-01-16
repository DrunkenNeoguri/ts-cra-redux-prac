import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { commentSlice } from "./modules/commentSlice";

export const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
