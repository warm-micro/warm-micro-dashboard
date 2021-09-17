import { watchLogs } from '../features/home/utils/saga';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(watchLogs);
}
