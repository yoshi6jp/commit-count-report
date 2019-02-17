import { AppState, initialState } from './store';
import { ActionTypes, IAction } from './actions';
export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SET_URL: {
      const [owner, name] = (action.payload || '').split('/');
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
    default: {
      return state;
    }
  }
};
