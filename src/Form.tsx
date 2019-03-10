import React, { useCallback, useContext } from "react";
import { RootContext } from "./Provider";
import { ActionTypes } from "./actions";
export const Form = ({ children }: { children: React.ReactNode }) => {
  const {
    dispatch,
    state: { waiting }
  } = useContext(RootContext);
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      if (!waiting) {
        dispatch({ type: ActionTypes.GET_COMMIT_COUNT });
      }
      e.preventDefault();
    },
    [dispatch, waiting]
  );
  return <form onSubmit={onSubmit}>{children}</form>;
};
