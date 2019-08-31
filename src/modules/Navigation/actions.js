import { createAction } from 'redux-actions';

export const addressListRequest = createAction('ADDRESS_LIST_REQUEST');
export const addressListSuccess = createAction('ADDRESS_LIST_SUCCESS');
export const addressListFailure = createAction('ADDRESS_LIST_FAILURE');

export const routeRequest = createAction('ROUTE_REQUEST');
export const routeSuccess = createAction('ROUTE_SUCCESS');
export const routeFailure = createAction('ROUTE_FAILURE');

