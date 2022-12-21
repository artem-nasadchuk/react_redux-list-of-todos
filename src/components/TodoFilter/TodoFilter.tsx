import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions } from '../../features/filter';
import { Status } from '../../types/Status';

export const TodoFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { query, status } = useAppSelector((state) => state.filter);

  const handleChange = (
    event:
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, localName } = event.target;

    if (localName === 'input') {
      dispatch(actions.setQuery(value));
    }

    if (localName === 'select') {
      dispatch(actions.setStatus(value as Status));
    }
  };

  const resetQuery = () => {
    dispatch(actions.setQuery(''));
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={handleChange}
            value={status}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {!!query.trim() && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            <button
              aria-label="query-delete"
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={resetQuery}
            />
          </span>
        )}
      </p>
    </form>
  );
};
