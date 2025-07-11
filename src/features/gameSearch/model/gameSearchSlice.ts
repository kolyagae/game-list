import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GameSearchState = {
  query: string;
};

const initialState: GameSearchState = {
  query: '',
};

const gameSearchSlice = createSlice({
  name: 'gameSearch',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = gameSearchSlice.actions;
export default gameSearchSlice.reducer;
