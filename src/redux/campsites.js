//import { act } from "react-dom/test-utils";
import * as ActionType from "./ActionTypes";

export const Campsites = (
  state = {
    isLoading: true,
    errMess: null,
    Campsites: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_CAMPSITES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        campsites: action.payload,
      };
    case ActionType.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errMess: null, campsites: [] };
    case ActionType.CAMPSITE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
