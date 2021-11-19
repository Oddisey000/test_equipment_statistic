import INITIAL_STATE from "../root.state";
import { 
  GET_ORDER_NUMBERS,
  GET_EQUIPMENT_LIST
} from "./app-reducer.types";

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBERS:
      return {
        ...state,
        ordersToSelect: action.payload
      };
    case GET_EQUIPMENT_LIST:
      return {
        ...state,
        testingEquipmentToSelect: action.payload
      }
    default:
      return state;
  }
};

export default appReducer;