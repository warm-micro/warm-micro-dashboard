import React from 'react';
import { useSelector } from 'react-redux';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { ChartTitle } from '../component/ChartTitle';
import { selectAverages, selectCounts } from '../utils/reducer';

const Latency = () => {
  const avg = useSelector(selectAverages);
  return (
    <Container>
      <ChartTitle>AVERAGE LATENCY (ms)</ChartTitle>
      <Content>
        <BarChart width={640} height={420} data={avg}>
          <Bar dataKey="value" fill="#552BFF" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </Content>
    </Container>
  );
};

export default Latency;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 420px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  padding-left: 0px;
  font-size: 10px;
`;
