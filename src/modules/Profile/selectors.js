import { createSelector } from "reselect";

const getState = state => state;

export const getProfile = createSelector(getState, state => state.profile);