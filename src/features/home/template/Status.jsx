import React from 'react';
import { useSelector } from 'react-redux';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import styled from 'styled-components';
import { ChartTitle } from '../component/ChartTitle';
import { selectCounts, selectData } from '../utils/reducer';

const COLORS = ['#FF6363', '#FFE663', '#63E64E'];

const Status = () => {
  const data = useSelector(selectData);
  const count = useSelector(selectCounts);
  console.log(data.account);
  return (
    <Container>
      <ChartTitle>STATUS CODES</ChartTitle>
      <Content>
        <Element>
          <ElementTitle>account</ElementTitle>
          <ElementCnt>
            {count.account}/{count.all}
          </ElementCnt>
          <PieChart width={220} height={220}>
            <Tooltip />
            <Pie
              data={data.account}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {data.account.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        <Element>
          <ElementTitle>workspace</ElementTitle>
          <ElementCnt>
            {count.workspace}/{count.all}
          </ElementCnt>
          <PieChart width={220} height={220}>
            <Tooltip />
            <Pie
              data={data.workspace}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {data.workspace.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        <Element>
          <ElementTitle>sprint</ElementTitle>
          <ElementCnt>
            {count.sprint}/{count.all}
          </ElementCnt>
          <PieChart width={220} height={220}>
            <Tooltip />
            <Pie
              data={data.sprint}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {data.sprint.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        <Element>
          <ElementTitle>card</ElementTitle>
          <ElementCnt>
            {count.card}/{count.all}
          </ElementCnt>
          <PieChart width={220} height={220}>
            <Tooltip />
            <Pie
              data={data.card}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {data.card.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        <Element>
          <ElementTitle>thread</ElementTitle>
          <ElementCnt>
            {count.thread}/{count.all}
          </ElementCnt>
          <PieChart width={220} height={220}>
            <Tooltip />
            <Pie
              data={data.thread}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {data.thread.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        <Element>
          <ElementTitle>directMessage</ElementTitle>
          <ElementCnt>
            {count.directMessage}/{count.all}
          </ElementCnt>
          <PieChart width={220} height={220}>
            <Tooltip />
            <Pie
              data={data.directMessage}
              cy={85}
              innerRadius={60}
              outerRadius={80}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {data.directMessage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        {/* </PieChart> */}
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
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 220px;
  height: 220px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
`;
const ElementTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #606060;
  width: 100%;
`;

const ElementCnt = styled.div`
  position: absolute;
  top: 50%;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
`;
