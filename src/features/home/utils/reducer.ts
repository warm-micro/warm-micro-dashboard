import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import moment from 'moment';
import { fetchLogsSuccess } from './action';
import { Log, Logs } from './interface';

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
export const selectServiceLogs = (state: RootState, log: string) => {
	return state.logs.logs[log];
};

const getRed = (logs: Log[]) => {
	return logs.filter(log => parseInt(log.Status) >= 500).length;
};
const getYellow = (logs: Log[]) => {
	return logs.filter(log => parseInt(log.Status) < 500 && parseInt(log.Status) >= 400)
		.length;
};
const getGreen = (logs: Log[]) => {
	return logs.filter(log => parseInt(log.Status) < 400 && parseInt(log.Status) >= 200)
		.length;
};
const getObject = (logs: Log[]) => {
	return [
		{ name: 'server error', value: getRed(logs) },
		{ name: 'client error', value: getYellow(logs) },
		{
			name: 'success',
			value: getYellow(logs) === 0 && getRed(logs) === 0 ? 100 : getGreen(logs),
		},
	];
};
export const selectTimeData = (state: RootState, id: string) => {
	const arr: { time: number; count: number }[] = [];
	if (state.logs.logs[id].length > 0) {
		let firstTime = state.logs.logs[id][0].CreatedAt as Date;
		arr.push({
			time: moment(firstTime, 'YYYY-MM-DD')
				.subtract(1, 'days')
				.toDate()
				.getTime(),
			count: 0,
		});
		let currTime;
		let cnt = 0;
		state.logs.logs[id].forEach((log: Log) => {
			currTime = log.CreatedAt;
			if (moment(firstTime).dayOfYear() === moment(currTime).dayOfYear()) {
				cnt++;
			} else {
				arr.push({
					time: moment(firstTime, 'YYYY-MM-DD')
						.toDate()
						.getTime(),
					count: cnt,
				});
				firstTime = moment(currTime).toDate();
				cnt = 1;
			}
		});
		arr.push({
			time: moment(firstTime, 'YYYY-MM-DD')
				.add(1, 'days')
				.toDate()
				.getTime(),
			count: 0,
		});
		return arr;
	}
	return [];
};

export const selectData = (state: RootState, id?: string) => {
	switch (id) {
		case 'account':
			return getObject(state.logs.logs.account);
		case 'workspace':
			return getObject(state.logs.logs.workspace);
		case 'sprint':
			return getObject(state.logs.logs.sprint);
		case 'card':
			return getObject(state.logs.logs.card);
		case 'thread':
			return getObject(state.logs.logs.thread);
		case 'directMessage':
			return getObject(state.logs.logs.directMessage);

		default:
			return {
				account: getObject(state.logs.logs.account),
				workspace: getObject(state.logs.logs.workspace),
				sprint: getObject(state.logs.logs.sprint),
				card: getObject(state.logs.logs.account),
				thread: getObject(state.logs.logs.thread),
				directMessage: getObject(state.logs.logs.directMessage),
			};
	}
};
export const selectAverages = (state: RootState) => {
	const account = Math.floor(
		state.logs.logs.account.reduce((acc, val) => {
			return acc + parseFloat(val.Latency);
		}, 0) / state.logs.logs.count.account
	);
	const workspace = Math.floor(
		state.logs.logs.workspace.reduce((acc, val) => {
			return acc + parseFloat(val.Latency);
		}, 0) / state.logs.logs.count.workspace
	);
	const sprint = Math.floor(
		state.logs.logs.sprint.reduce((acc, val) => {
			return acc + parseFloat(val.Latency);
		}, 0) / state.logs.logs.count.sprint
	);
	const card = Math.floor(
		state.logs.logs.card.reduce((acc, val) => {
			return acc + parseFloat(val.Latency);
		}, 0) / state.logs.logs.count.card
	);
	const thread = Math.floor(
		state.logs.logs.thread.reduce((acc, val) => {
			return acc + parseFloat(val.Latency);
		}, 0) / state.logs.logs.count.thread
	);
	const directMessage = Math.floor(
		state.logs.logs.directMessage.reduce((acc, val) => {
			return acc + parseFloat(val.Latency);
		}, 0) / state.logs.logs.count.directMessage
	);
	return [
		{ name: 'account', value: isNaN(account) ? 1 : account },
		{ name: 'workspace', value: isNaN(workspace) ? 0 : workspace },
		{ name: 'sprint', value: isNaN(sprint) ? 0 : sprint },
		{ name: 'card', value: isNaN(card) ? 0 : card },
		{ name: 'thread', value: isNaN(thread) ? 0 : thread },
		{ name: 'dm', value: isNaN(directMessage) ? 0 : directMessage },
	];
};
