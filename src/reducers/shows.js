import { showRequest, showSuccess, showFailure } from '../actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const show = handleActions(
  {
    [showRequest]: () => {},
    [showSuccess]: (_state, action) => action.payload
  },
  {}
);

const isLoading = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  show,
  isLoading,
  error
});

export const getShow = state => {
  const { show } = state.shows;
  const { _embedded = {} } = show;
  const { cast = [] } = _embedded;

  return {
    name: show.name,
    image: show.image ? show.image.medium : null,
    summary: show.summary,
    persons: cast.map(item => item.person)
  };
};

export const getIsLoading = state => state.shows.isLoading;
export const getError = state => state.shows.error;
