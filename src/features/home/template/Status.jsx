import React from 'react';
import styled from 'styled-components';
import { ChartTitle } from '../component/ChartTitle';

const Status = () => {
  return (
    <Container>
      <ChartTitle>STATUS CODES</ChartTitle>
      <Content>
        <Element></Element>
        <Element></Element>
        <Element></Element>
        <Element></Element>
        <Element></Element>
        <Element></Element>
      </Content>
    </Container>
  );
};

export default Status;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const Element = styled.div`
  width: 220px;
  height: 200px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
`;
