import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';

import { fetchLogsSuccess } from './action';
import { Logs } from './interface';

const initialState = {
  logs: {
    account: [],
    workspace: [],
    sprint: [],
    card: [],
    thread: [],
    directMessage: [],
    all: [],
    count: {
      account: 0,
      workspace: 0,
      sprint: 0,
      card: 0,
      thread: 0,
      directMessage: 0,
      all: 0,
    },
  } as Logs,
};

const reducer = createReducer(initialState, {
  [fetchLogsSuccess.type]: (state, action: ReturnType<typeof fetchLogsSuccess>) => {
    state.logs = { ...action.payload };
  },
});

export default reducer;

export const selectLogs = (state: RootState) => state.logs;
export const selectCounts = (state: RootState) => state.logs.logs.count;
