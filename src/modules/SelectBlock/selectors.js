import { createSelector } from "reselect";

const getState = state => state.select;

export const getOptions = createSelector(getState, (state) => {
  const options = state.options;
  if (options && options.length) {
    return options.map((item, idx) => ({
      label: item,
      value: idx
    }));
  }
});
export const getErrors = createSelector(getState, state => state.error);
export const getRoute = createSelector(getState, state => state.route);