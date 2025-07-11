import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { setSearchQuery } from '../model/gameSearchSlice';
import SearchIcon from '@/assets/icons/search.svg';
import * as s from './GameSearch.module.css';

import { useActionState } from 'react';

export const GameSearchForm = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.gameSearch.query);

  const [error, submitAction, isPending] = useActionState(async (_: null, formData: FormData) => {
    const searchStr = formData.get('search');
    if (typeof searchStr === 'string') {
      dispatch(setSearchQuery(searchStr));
    }
    return null;
  }, null);

  return (
    <div className={s.wrapper}>
      <form className={s.form} action={submitAction}>
        <label htmlFor="search">Search</label>
        <div className={s.search}>
          <div className={s.searchField}>
            <input
              className={s.input}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              defaultValue={searchQuery}
            />
            <span className={s.icon}>
              <SearchIcon />
            </span>
          </div>

          <button className={s.button} type="submit" disabled={isPending}>
            SEARCH
          </button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
