import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user.interface";

export const UserSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    setUser: (state, action) => {
      if (action.payload) {
        state = action.payload;
      } else {
        state = null;
      }
    },
  },
});

export default UserSlice.reducer
export const {setUser} = UserSlice.actions