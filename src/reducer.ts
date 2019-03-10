import { initialState } from "./store";
import { ActionTypes, Actions } from "./actions";
export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_URL: {
      const [owner, name] = (action.payload || "").split("/");
      if (owner && name) {
        return { ...state, owner, name };
      } else {
        return state;
      }
    }
    case ActionTypes.SET_TARGET: {
      const target = action.payload;
      return { ...state, target };
    }
    case ActionTypes.SET_RESULT: {
      const result = action.payload;
      return { ...state, result };
    }
    case ActionTypes.SET_DURATION: {
      const { since, until } = action.payload;
      return { ...state, since, until };
    }
    case ActionTypes.SET_WAITING: {
      const waiting = action.payload;
      return { ...state, waiting };
    }
    default: {
      return state;
    }
  }
};
