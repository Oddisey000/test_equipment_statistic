import INITIAL_STATE from "../root.state";
//import {} from "./app-reducer.types";

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /*case CHANGE_APP_LANGUAGE:
      return {
        ...state,
        appLanguage: action.payload
      };*/
    default:
      return state;
  }
};

export default appReducer;