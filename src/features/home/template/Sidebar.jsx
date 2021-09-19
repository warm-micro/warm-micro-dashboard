import React from 'react';
import styled from 'styled-components';
import ServiceBtn from '../component/ServiceBtn';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<Container>
			<Link to="/home">
				<ServiceBtn />
			</Link>
			<Content>
				<SprintListTitle>Server List</SprintListTitle>
				<ListContainer>
					<Link to={`/service/account`}>
						<Element>account</Element>
					</Link>
					<Link to="/service/workspace">
						<Element>workspace</Element>
					</Link>
					<Link to="/service/sprint">
						<Element>sprint</Element>
					</Link>
					<Link to="/service/card">
						<Element>card</Element>
					</Link>
					<Link to="/service/thread">
						<Element>thread</Element>
					</Link>
					<Link to="/service/directMessage">
						<Element>directMessage</Element>
					</Link>
				</ListContainer>
			</Content>
		</Container>
	);
};

export default Sidebar;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 280px;
	min-width: 280px;
	min-height: 100vh;
	background-color: #ffffff;
`;

const SprintListTitle = styled.div`
	padding: 0 20px;

	margin-bottom: 10px;
	font-size: 18px;
	font-weight: bold;
`;

const Content = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Element = styled.div`
	cursor: pointer;
	padding-left: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	min-height: 50px;
	background: #f9f9f9;
	color: #606060;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	&:hover {
		background: #e5e5e5;
		color: #000000;
		div {
			border: 0.5px solid #000000;
		}
	}
	${props =>
		props.isCurrent &&
		`background: #F6F3FF;
    border-right: 5px solid #552BFF;
    color: #552BFF;
    div{
      border-color: #552BFF;
    }
  `};
`;
