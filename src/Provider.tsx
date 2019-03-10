import React, { createContext, useReducer } from "react";
import _ from "lodash";
import { Actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./store";
import { sideEffector } from "./sideEffector";
import { useSideEffector } from "./util/useSideEffector";
export const RootContext = createContext({
  state: initialState,
  dispatch: (action: Actions) => {}
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useSideEffector(
    useReducer(reducer, initialState),
    sideEffector
  );
  const value = {
    state,
    dispatch
  };
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};
