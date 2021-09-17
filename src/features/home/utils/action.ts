import { createAction } from '@reduxjs/toolkit';
import { Logs } from './interface';

export const fetchLogsStart = createAction('fetchLogsStart', (service: string) => {
  return { payload: service };
});
export const fetchLogsSuccess = createAction('fetchLogsSuccess', (logs: Logs) => {
  return { payload: logs };
});
