import React, { useCallback, createContext, useReducer, Dispatch } from 'react';
import _ from 'lodash';
import { ActionTypes } from './actions';
import { reducer } from './reducer';
import { initialState } from './store';
import axios from 'axios';
import { useWait } from 'react-use';
import { start } from 'repl';
import { string } from 'prop-types';
export const RootContext = createContext({
  state: initialState,
  setUrl: (url: string) => {},
  setTarget: (target: string) => {},
  setDuration: ({ since, until }: { since: string; until: string }) => {},
  getCommitCount: () => {}
});
interface CommitCountResult {
  output: {
    github: {
      output: {
        values: [[string, string, string, string, string, number, string]];
      };
    };
  };
}
interface FetchCommitCountProps {
  target: string;
  owner: string;
  name: string;
  sheetId: string;
  username: string;
  password: string;
  since?: string;
  until?: string;
}
const fetchCommitCount = ({
  target,
  owner,
  name,
  sheetId,
  username,
  password,
  since = '',
  until = ''
}: FetchCommitCountProps) =>
  axios
    .post<CommitCountResult>(
      'https://protected-depths-49487.herokuapp.com/statemachine/commit_count_report.json?blocking=true ',
      {
        input: {
          github: {
            target,
            owner,
            name,
            since,
            until
          },
          gsheet: {
            sheetId
          }
        }
      },
      {
        auth: {
          username,
          password
        }
      }
    )
    .then(
      ({
        data: {
          output: {
            github: {
              output: { values }
            }
          }
        }
      }) => values[0][5]
    );
export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { startWaiting, endWaiting } = useWait();
  const {
    target,
    owner,
    name,
    since,
    until,
    username,
    password,
    sheetId
  } = state;
  const value = {
    state,
    setUrl: useCallback(
      (url: string) => {
        dispatch({ type: ActionTypes.SET_URL, payload: url });
      },
      [dispatch]
    ),
    setTarget: useCallback(
      (target: string) => {
        dispatch({ type: ActionTypes.SET_TARGET, payload: target });
      },
      [dispatch]
    ),
    setDuration: useCallback(
      ({ since, until }: { since: string; until: string }) => {
        dispatch({ type: ActionTypes.SET_DURATION, payload: { since, until } });
      },
      [dispatch]
    ),
    getCommitCount: useCallback(() => {
      if (target && owner && name) {
        (async () => {
          startWaiting('fetch');
          try {
            const result = await fetchCommitCount({
              target,
              owner,
              name,
              since,
              until,
              username,
              password,
              sheetId
            });
            dispatch({ type: ActionTypes.SET_RESULT, payload: result });
          } catch (e) {
            console.log(e);
          } finally {
            endWaiting('fetch');
          }
        })();
      }
    }, [
      dispatch,
      target,
      owner,
      name,
      since,
      until,
      username,
      password,
      sheetId,
      startWaiting,
      endWaiting
    ])
  };
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};
