import makeRequest from '../../../app/makeRequest';
import { Log } from './interface';

export const fetchAllLogsAPI = () =>
	makeRequest<Response>({
		method: 'get',
		url: `log`,
	});
export const fetchServiceLogsAPI = (service: string) =>
	makeRequest<Response>({
		method: 'get',
		url: `log`,
		query: { service: service },
	});

export interface Response {
	message: string;
	body: Log[];
}
