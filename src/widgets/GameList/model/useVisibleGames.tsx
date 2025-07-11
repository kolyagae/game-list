import { useEffect, useRef, useState } from 'react';
import { useGetAllGamesQuery } from '@/entities/game/model/game.api';
import { BATCH_SIZE } from './constants';
import { useAppSelector } from '@/shared/lib/redux';

export const useVisibleGames = () => {
  const { data, error, isLoading } = useGetAllGamesQuery();
  const selectedType = useAppSelector((state) => state.gameFilter.selectedType);
  const searchQuery = useAppSelector((state) => state.gameSearch.query);

  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!data || !data[selectedType] || visibleCount >= data[selectedType].length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + BATCH_SIZE);
        }
      },
      { rootMargin: '200px' },
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [data, visibleCount, selectedType, searchQuery]);

  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [selectedType, searchQuery]);

  const visibleGames =
    data && data[selectedType]
      ? data[selectedType]
          .filter((game) => game.gameName.toLowerCase().includes(searchQuery.toLowerCase()))
          .slice(0, visibleCount)
      : [];

  return {
    visibleGames,
    isLoading,
    error,
    loaderRef,
  };
};
