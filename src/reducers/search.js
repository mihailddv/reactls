import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const shows = handleActions(
  {
    [searchRequest]: () => {},
    [searchSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  shows,
  isLoading,
  error
});

export const getShows = state => {
  const { shows } = state.search;

  return shows.map(item => ({
    id: item.id,
    name: item.name,
    summary: item.summary,
    image: item.image ? item.image.medium : null
  }));
};

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
