import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
// import userReducer from "../features/authSlice/user";
export const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
