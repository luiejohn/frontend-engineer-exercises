import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  isLogin: boolean;
  token: string | null;
}

const initialState: CounterState = {
  isLogin: false,
  token: null,
};

export const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLogin = true;
      state.token = action.payload;
    },
    setLogout: (state) => {
      localStorage.removeItem('token');
      state.isLogin = false;
      state.token = null;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
