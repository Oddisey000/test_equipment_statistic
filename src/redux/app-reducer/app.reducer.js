import INITIAL_STATE from "../root.state";
import { GET_ORDER_NUMBERS } from "./app-reducer.types";

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBERS:
      return {
        ...state,
        ordersToSelect: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;