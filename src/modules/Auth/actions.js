import { createAction } from "redux-actions";

export const loginIn = createAction("@@auth/LOGIN_IN");
export const loginOut = createAction("@@auth/LOGIN_OUT");
export const updateError = createAction("@@redux-form/UPDATE_SYNC_ERRORS");
