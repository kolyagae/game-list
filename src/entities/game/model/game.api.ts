import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Game, GameResponse } from '@/shared/types/game.types';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://belparyaj.com/pragmatic',
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<Record<string, Game[]>, void>({
      query: () => ({
        url: 'game/list',
        params: { partner_name: 'belparyaj' },
      }),
      transformResponse: (response: GameResponse) => {
        const grouped = response.result.reduce(
          (acc, game) => {
            const extendedGame = {
              ...game,
              imageUrl: `https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${game.gameID}.png`,
            };

            if (!acc[game.gameTypeID]) acc[game.gameTypeID] = [];
            acc[game.gameTypeID].push(extendedGame);

            return acc;
          },
          {} as Record<string, Game[]>,
        );

        return {
          ...grouped,
          all: Object.values(grouped).flat(),
        };
      },
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetAllGamesQuery } = gameApi;
