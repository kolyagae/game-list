import PragmaticIcon from '@/assets/icons/pragmatic.svg';
import { GameListItem } from '@/entities/game/ui/GameListItem';
import { useVisibleGames } from '../model/useVisibleGames';
import * as s from './GameList.module.css';

export const GameList = () => {
  const { visibleGames, isLoading, error, loaderRef } = useVisibleGames();

  if (isLoading) return <div>Идёт загрузка данных...</div>;
  if (error) return <div>Произошла ошибка, попробуйте позже</div>;
  if (!visibleGames.length) return <div>Игры не найдены</div>;

  return (
    <>
      <div className={s.titleWrapper}>
        <PragmaticIcon />
        <h1 className={s.title}>Pragmatic play</h1>
      </div>

      <div className={s.list}>
        {visibleGames.map((el) => (
          <GameListItem key={el.gameID} gameName={el.gameName} imageUrl={el.imageUrl} />
        ))}
        <div className={s.loaderRef} ref={loaderRef} />
      </div>
    </>
  );
};
