import { Actions, ActionTypes, GET_COMMIT_COUNT } from "./actions";
import { Dispatch } from "react";
import { AppState } from "./store";
import axios from "axios";
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
  since = "",
  until = ""
}: FetchCommitCountProps) =>
  axios
    .post<CommitCountResult>(
      "https://protected-depths-49487.herokuapp.com/statemachine/commit_count_report.json?blocking=true ",
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

const getCommitCount = async (
  action: GET_COMMIT_COUNT,
  dispatch: Dispatch<Actions>,
  state: AppState
) => {
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
  dispatch({ type: ActionTypes.SET_WAITING, payload: true });
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
    dispatch({ type: ActionTypes.SET_WAITING, payload: false });
  }
};
export const sideEffector = (
  action: Actions,
  dispatch: Dispatch<Actions>,
  state: AppState
) => {
  switch (action.type) {
    case ActionTypes.GET_COMMIT_COUNT: {
      getCommitCount(action, dispatch, state);
      return;
    }
  }
};
