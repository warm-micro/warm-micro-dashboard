import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ChartTitle } from '../component/ChartTitle';
import { selectAllLogs, selectServiceLogs } from '../utils/reducer';
const Logs = ({ log }) => {
	const allLogs = useSelector(state => selectServiceLogs(state, log));
	return (
		<Container>
			<ChartTitle>LOGS</ChartTitle>
			<Content>
				<TableTitle>
					<div className="method">method</div>
					<div className="status">status</div>
					<div className="microservice">microservice</div>
					<div className="latency">latency (ms)</div>
					<div className="time">time</div>
				</TableTitle>
				{allLogs.map(log => (
					<Element key={log.ID}>
						<div className="method">{log.Method}</div>
						<div className="status">
							<Status status={log.Status}>{log.Status}</Status>
						</div>
						<div className="microservice">{log.Api}</div>
						<div className="latency">{log.Latency}</div>
						<div className="time">{log.CreatedAt}</div>
					</Element>
				))}
			</Content>
		</Container>
	);
};

export default Logs;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Content = styled.div`
	width: 95%;
	padding: 20px;
	background: #ffffff;
	box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`;

const Status = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-weight: bold;
	font-size: 14px;
	color: #ffffff;

	width: 50px;
	height: 30px;
	border-radius: 20px;
	background: ${props =>
		parseInt(props.status) >= 500
			? '#FF6363'
			: parseInt(props.status) >= 400
			? '#FFE663'
			: '#63E64E'};
`;

const TableTitle = styled.div`
	display: flex;
	align-items: center;
	height: 30px;
	min-height: 30px;
	color: #552bff;
	font-size: 14px;
	margin-bottom: 10px;

	.method {
		flex: 1 1;
	}
	.status {
		flex: 1 1;
	}
	.microservice {
		flex: 3 3;
	}
	.latency {
		flex: 1 1;
	}
	.time {
		flex: 2 2;
	}
`;

const Element = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	min-height: 50px;
	border-top: 0.5px solid #606060;
	.method {
		flex: 1 1;
	}
	.status {
		flex: 1 1;
	}
	.microservice {
		flex: 3 3;
	}
	.latency {
		flex: 1 1;
	}
	.time {
		flex: 2 2;
	}
`;
