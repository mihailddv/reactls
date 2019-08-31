import { createSelector } from 'reselect';

export const getAddressList = createSelector(
  state => state.navigation.addressList,
  addressList => addressList.addresses
);

export const getRoute = createSelector(
  state => state.navigation.route,
  route => route.route
);
