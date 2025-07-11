import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { setSelectedType } from '../model/gameFilterSlice';
import { Dropdown } from '@/shared/ui/dropdown/Dropdown';
import { useGetAllGamesQuery } from '@/entities/game/model/game.api';

import * as s from './GameFilter.module.css';

export const GameFilter = () => {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector((state) => state.gameFilter.selectedType);
  const { currentData } = useGetAllGamesQuery();
  const options = Object.keys(currentData ?? {}).map((k) => ({ value: k, label: k }));

  const handleChange = (value: string) => {
    dispatch(setSelectedType(value));
  };

  return (
    <div className={s.wrapper}>
      <p className={s.label}>Game Type</p>
      <Dropdown options={options} value={selectedType} onChange={handleChange} />
    </div>
  );
};
