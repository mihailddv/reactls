import { createAction } from "redux-actions";

export const fetchRequest = createAction("@@selectBlock/FETCH_REQUEST");
export const fetchSuccess = createAction("@@selectBlock/FETCH_SUCCESS");
export const fetchFail = createAction("@@selectBlock/FETCH_FAIL");
export const fetchAddress = createAction("@@selectBlock/FETCH_ADDRESS");
export const fetchAddressSuccess = createAction("@@selectBlock/FETCH_ADDRESS_SUCCESS");