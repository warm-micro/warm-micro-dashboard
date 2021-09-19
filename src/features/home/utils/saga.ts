import { fetchLogsStart, fetchLogsSuccess } from './action';
import { takeEvery, all, put } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { fetchAllLogsAPI, fetchServiceLogsAPI } from './api';
import { Logs } from './interface';

function* fetchLogsSaga() {
	try {
		const account = yield call(fetchServiceLogsAPI, 'account');
		const workspace = yield call(fetchServiceLogsAPI, 'workspace');
		const sprint = yield call(fetchServiceLogsAPI, 'sprint');
		const card = yield call(fetchServiceLogsAPI, 'card');
		const thread = yield call(fetchServiceLogsAPI, 'thread');
		const directMessage = yield call(fetchServiceLogsAPI, 'directMessage');
		const all = yield call(fetchAllLogsAPI);

		const result: Logs = {
			account: account.body,
			workspace: workspace.body,
			sprint: sprint.body,
			card: card.body,
			thread: thread.body,
			directMessage: directMessage.body,
			all: all.body,
			count: {
				account: account.body.length,
				workspace: workspace.body.length,
				sprint: sprint.body.length,
				card: card.body.length,
				thread: thread.body.length,
				directMessage: directMessage.body.length,
				all: all.body.length,
			},
		};
		yield put(fetchLogsSuccess(result));
	} catch (error) {
		console.log(error.message);
	}
}

export function* watchLogs() {
	yield all([takeEvery(fetchLogsStart.type, fetchLogsSaga)]);
}
