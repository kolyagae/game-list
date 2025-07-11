import { ImageWithLoader } from '@/shared/ui/imageWithLoader/imageWithLoader';
import * as s from './GameListItem.module.css';

type PropsType = {
  gameName: string;
  imageUrl: string;
};

export const GameListItem = ({ gameName, imageUrl }: PropsType) => {
  return (
    <div className={s.item}>
      <ImageWithLoader
        src={imageUrl}
        alt={gameName}
        width={191}
        height={118}
        loading="lazy"
        title={gameName}
      />
      <p className={s.gameName} title={gameName}>
        {gameName}
      </p>
    </div>
  );
};
