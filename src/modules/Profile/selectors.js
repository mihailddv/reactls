import { createSelector } from 'reselect'

export const getProfile = createSelector(
    state => state.profile.profile, profile => profile
);

export const getError = createSelector(
    state => state.profile.error, error => error
);

export const getIsLoading = createSelector(
    state => state.profile.isLoading, isLoading => isLoading
);

export const getIsFilled = createSelector(
    state => state.profile.profile, profile => profile.cardName && profile.cardNumber && profile.expDate && profile.cvv
);