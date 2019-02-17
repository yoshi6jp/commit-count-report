export enum ActionTypes {
  SET_URL = 'SET_URL',
  SET_TARGET = 'SET_TARGET',
  SET_DURATION = 'SET_DURATION',
  GET_COMMIT_COUNT = 'GET_COMMIT_COUNT',
  SET_RESULT = 'SET_RESULT'
}

export interface IAction {
  type: ActionTypes;
  payload?: any;
  meta?: { [key: string]: any };
}
