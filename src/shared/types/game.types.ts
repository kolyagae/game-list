export interface Game {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  technology: string;
  platform: string;
  imageUrl: string;
}

export interface GameResponse {
  result: Game[];
  status: number;
  error_message: string;
}

export interface LazyLoadedGamesSelector {
  allFilteredGames: Game[];
  visibleGames: Game[];
  hasMore: boolean;
  totalCount: number;
}
