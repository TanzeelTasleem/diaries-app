import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import diaryReducer from '../features/diaries/diariesSlice'
// import userReducer from "../features/authSlice/user";
export const rootReducer = combineReducers({
  auth: authReducer,
  diary: diaryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;