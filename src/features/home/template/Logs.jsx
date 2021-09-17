import React from 'react';
import styled from 'styled-components';
import { ChartTitle } from '../component/ChartTitle';

const Logs = () => {
  return (
    <Container>
      <ChartTitle>LOGS</ChartTitle>
      <Content>
        <TableTitle>
          <div className="method">method</div>
          <div className="status">status</div>
          <div className="microservice">microservice</div>
          <div className="latency">latency</div>
          <div className="time">time</div>
        </TableTitle>
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
  width: 1150px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const TableTitle = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  min-height: 30px;
  color: #552bff;
  font-size: 14px;

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
