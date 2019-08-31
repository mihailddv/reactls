import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  addressListRequest,
  routeRequest,
  addressListSuccess,
  routeSuccess,
  addressListFailure,
  routeFailure
} from './actions';

const isLoading = handleActions(
  {
    [addressListRequest]: () => true,
    [addressListSuccess]: () => false,
    [addressListFailure]: () => false,
    [routeRequest]: () => true,
    [routeSuccess]: () => false,
    [routeFailure]: () => false
  },
  false
);

const error = handleActions({
    [addressListFailure]: (state, action) => action.payload,
    [routeFailure]: (state, action) => action.payload,
    [addressListSuccess]: () => '',
    [routeSuccess]: () => '',
}, '');

const addressList = handleActions({
    [addressListSuccess]: (state, action) => action.payload,
}, []);

const route = handleActions({
    [routeSuccess]: (state, action) => action.payload,
}, '')

export default combineReducers({ isLoading, error, addressList, route });
