import React, { useCallback, useContext } from 'react';
import { RootContext } from './Provider';
import { useWait } from 'react-use';
export const Form = ({ children }: { children: React.ReactNode }) => {
  const { getCommitCount } = useContext(RootContext);
  const { isWaiting } = useWait();
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      if (!isWaiting('fetch')) {
        getCommitCount();
      }
      e.preventDefault();
    },
    [getCommitCount, isWaiting]
  );
  return <form onSubmit={onSubmit}>{children}</form>;
};
