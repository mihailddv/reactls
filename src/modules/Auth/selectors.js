import { createSelector } from "reselect";

const getAuthState = state => state.auth;

export const getAuth = createSelector(getAuthState, state => state.isAuthorized);
