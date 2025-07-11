import { configureStore } from '@reduxjs/toolkit';
import { gameApi } from '../entities/game/model/game.api';
import gameFilterReducer from '@/features/gameFilter/model/gameFilterSlice';
import gameSearchReducer from '@/features/gameSearch/model/gameSearchSlice';

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    gameFilter: gameFilterReducer,
    gameSearch: gameSearchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
