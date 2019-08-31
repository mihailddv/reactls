import { createAction } from "redux-actions";

export const authRequest = createAction("AUTH_REQUEST");
export const authSuccess = createAction("AUTH_SUCCESS");
export const authError = createAction("AUTH_ERROR");

export const logoutRequest = createAction("LOGOUT_REQUEST");
export const logoutSuccess = createAction("LOGOUT_SUCCESS");
export const logoutError = createAction("LOGOUT_ERROR");