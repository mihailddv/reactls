import { loginIn, loginOut } from "./actions";
import { load, storageLoggedIn } from "../../storage";

const initialState = {
  isAuthorized: load(storageLoggedIn) || false
};

export default (state = initialState, action) => {
  const { type, success } = action;
  switch (type) {
    case loginIn.toString():
      return {
        ...state,
        isAuthorized: success
      };
    case loginOut.toString():
      return {
        ...state,
        isAuthorized: false
      };
    default: {
      return state;
    }
  }
};
