import { createAction } from 'redux-actions'

export const saveProfileRequest = createAction('SET_PROFILE_REQUEST');
export const saveProfileSuccess = createAction('SET_PROFILE_SUCCESS');
export const saveProfileFailure = createAction('SET_PROFILE_FAILURE');