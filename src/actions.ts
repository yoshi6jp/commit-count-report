export enum ActionTypes {
  SET_URL = "SET_URL",
  SET_TARGET = "SET_TARGET",
  SET_DURATION = "SET_DURATION",
  GET_COMMIT_COUNT = "GET_COMMIT_COUNT",
  SET_RESULT = "SET_RESULT",
  SET_WAITING = "SET_WAITING"
}

export interface IAction {
  type: ActionTypes;
  payload?: any;
  meta?: { [key: string]: any };
}

export interface SET_URL extends IAction {
  type: ActionTypes.SET_URL;
  payload: string;
}

export interface SET_TARGET extends IAction {
  type: ActionTypes.SET_TARGET;
  payload: string;
}

export interface SET_DURATION extends IAction {
  type: ActionTypes.SET_DURATION;
  payload: {
    since: string;
    until: string;
  };
}
export interface SET_WAITING extends IAction {
  type: ActionTypes.SET_WAITING;
  payload: boolean;
}
export interface GET_COMMIT_COUNT extends IAction {
  type: ActionTypes.GET_COMMIT_COUNT;
}

export interface SET_RESULT extends IAction {
  type: ActionTypes.SET_RESULT;
  payload: string | number;
}

export type Actions =
  | SET_URL
  | SET_TARGET
  | SET_DURATION
  | GET_COMMIT_COUNT
  | SET_WAITING
  | SET_RESULT;
