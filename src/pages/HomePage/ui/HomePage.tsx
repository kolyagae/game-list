import { GameList } from '@/widgets/GameList/ui/GameList';
import { Header } from '@/widgets/Header/ui/Header';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <GameList />
      </main>
    </>
  );
};
