import { fetchFail, fetchSuccess, fetchAddressSuccess } from "./actions";

const initialState = {
  options: [],
  route: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case fetchSuccess.toString():
      return {
        ...state,
        options: payload
      };
    case fetchAddressSuccess.toString():
      return {
        ...state,
        route: payload
      };
    case fetchFail.toString():
      return {
        error: "Что-то пошло не так, попробуйте зайти позже"
      };
    default: {
      return state;
    }
  }
};