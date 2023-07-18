import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const searchUser = state.find((user) => user.id == id);
      if (searchUser) {
        searchUser.name = name;
        searchUser.email = email;
      }
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
