import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GameFilterState = {
  selectedType: string;
};

const initialState: GameFilterState = {
  selectedType: 'all',
};

const gameFilterSlice = createSlice({
  name: 'gameFilter',
  initialState,
  reducers: {
    setSelectedType(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
  },
});

export const { setSelectedType } = gameFilterSlice.actions;
export default gameFilterSlice.reducer;
