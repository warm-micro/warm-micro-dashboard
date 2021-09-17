import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ChartTitle } from '../component/ChartTitle';
import { selectCounts } from '../utils/reducer';

const Latency = () => {
  const counts = useSelector(selectCounts);
  return (
    <Container>
      <ChartTitle>AVERAGE LATENCY</ChartTitle>
      <Content>
        <Element>
          <Service>account</Service>
          <LatencyScore>{counts.account}</LatencyScore>
        </Element>
        <Element>
          <Service>workspace</Service>
          <LatencyScore>{counts.workspace}</LatencyScore>
        </Element>
        <Element>
          <Service>sprint</Service>
          <LatencyScore>{counts.sprint}</LatencyScore>
        </Element>
        <Element>
          <Service>card</Service>
          <LatencyScore>{counts.card}</LatencyScore>
        </Element>
        <Element>
          <Service>thread</Service>
          <LatencyScore>{counts.thread}</LatencyScore>
        </Element>
        <Element>
          <Service>directMessage</Service>
          <LatencyScore>{counts.directMessage}</LatencyScore>
        </Element>
      </Content>
    </Container>
  );
};

export default Latency;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
`;

const Content = styled.div`
  width: 380px;
  height: 400px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 30px;
`;
const Element = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
`;

const Service = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
`;

const LatencyScore = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #552bff;
`;
