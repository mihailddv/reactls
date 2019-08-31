import { saveProfile } from "./actions";
import { load, storagePaymentCard } from "../../storage";

const initialState = load(storagePaymentCard) || null;

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case saveProfile.toString():
      return {
        ...state,
        ...payload
      };
    default: {
      return state;
    }
  }
};