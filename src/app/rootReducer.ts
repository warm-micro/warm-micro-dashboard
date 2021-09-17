import { combineReducers } from '@reduxjs/toolkit';

import logReducer from '../features/home/utils/reducer';
const rootReducer = combineReducers({
  logs: logReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
