import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'useAuth',
  initialState: {username: '', token: '', userId: '', valid: false} as UserAuth,
  reducers: {
    setAuth: (state, action: PayloadAction<UserAuth>) => {
      state = action.payload;
    },
  },
});

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;

export type UserAuth = {
  username: string;
  token: string;
  userId: string;
  valid: boolean;
};
