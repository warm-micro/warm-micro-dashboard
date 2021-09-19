import React from 'react';
import styled from 'styled-components';
import Latency from '../template/Latency';
import Logs from '../template/Logs';
import Status from '../template/Status';
import { useParams } from 'react-router-dom';
const HomeBoard = () => {
	const param = useParams();
	return (
		<Content>
			<Title>{param.id} DASHBOARD</Title>
			<Charts>
				<Status></Status>
				<Latency></Latency>
			</Charts>
			<Logs log={'all'}></Logs>
		</Content>
	);
};

export default HomeBoard;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	width: 100%;
`;
const Title = styled.div`
	font-weight: bold;
	font-size: 36px;
	color: #000000;
`;

const Charts = styled.div`
	width: 100%;
	/* justify-content: space-around; */
	display: flex;
	margin: 42px 0;
`;
