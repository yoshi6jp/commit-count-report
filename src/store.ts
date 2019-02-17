import { Dispatch } from 'react';
import { IAction } from './actions';
export interface AppState {
  target: string;
  owner: string;
  name: string;
  since: string;
  until: string;
  sheetId: string;
  username: string;
  password: string;
  result: number | string;
}
export const initialState: AppState = {
  target: '',
  owner: '',
  name: '',
  since: '',
  until: '',
  sheetId: '1ywCxG8xTKOYK89AEZIqgpTvbvpbrb1s4H_bMVvKV59I',
  username: 'ec29e90c-188d-11e8-bb72-00163ec1cd01',
  password: '0b82fe63b6bd450519ade02c3cb8f77ee581f25a810db28f3910e6cdd9d041bf',
  result: ''
};
