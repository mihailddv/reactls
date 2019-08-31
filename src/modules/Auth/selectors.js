import { createSelector } from 'reselect';

export const getIsAuthorized = createSelector(
  state => state.auth.isAuth,
  isAuth => isAuth
);

export const getIsLoading = createSelector(
  state => state.auth.isLoading,
  isLoading => isLoading
);

export const getError = createSelector(
  state => state.auth.error,
  error => error
);

export const getName = createSelector(
  state => state.auth.name,
  name => name
);

export const getPassword = createSelector(
  state => state.auth.password,
  password => password
);
