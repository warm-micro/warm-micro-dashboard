import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Latency from '../template/Latency';
import Logs from '../template/Logs';
import Sidebar from '../template/Sidebar';
import Status from '../template/Status';
import { fetchLogsStart } from '../utils/action';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLogsStart());
  }, []);
  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>DASHBOARD</Title>
        <Charts>
          <Status></Status>
          <Latency></Latency>
        </Charts>
        <Logs></Logs>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #faf9ff;
`;

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
