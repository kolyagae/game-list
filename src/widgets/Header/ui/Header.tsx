import { GameFilter } from '@/features/gameFilter/ui/GameFilter';
import { GameSearchForm } from '@/features/gameSearch/ui/GameSearch';
import * as s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <GameFilter />
      <GameSearchForm />
    </header>
  );
};
