import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Logs from '../template/Logs';
import { useSelector } from 'react-redux';
import { selectCounts, selectData } from '../utils/reducer';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import moment from 'moment';
const dateFormatter = date => {
  // return moment(date).unix();
  return moment(date).format('DD/MM/YY HH:mm');
};

const COLORS = ['#FF6363', '#FFE663', '#63E64E'];

const Service = () => {
  const { id } = useParams();
  const data = useSelector(selectData);
  const count = useSelector(selectCounts);
  const usedData = data[id];
  usedData.forEach(d => {
    d.CreatedAt = moment(d.CreatedAt).valueOf(); // date -> epoch
  });

  return (
    <Content>
      <Title>{id}</Title>
      <Charts>
        <Element>
          <ElementTitle>{id}</ElementTitle>
          <ElementCnt>
            {count[id]}/{count.all}
          </ElementCnt>
          <PieChart width={400} height={400}>
            <Tooltip />
            <Pie
              data={usedData}
              cy={180}
              innerRadius={120}
              outerRadius={160}
              fill="#FF6363"
              paddingAngle={3}
              dataKey="value"
            >
              {usedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Element>
        <ChartContent>
          <AreaChart
            width={900}
            height={400}
            data={data[id]}
            margin={{
              top: 10,
              right: 30,
              left: -30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="CreatedAt"
              domain={[usedData[0].CreatedAt, usedData[usedData.length - 1].CreatedAt]}
              scale="time"
              type="number"
              tickFormatter={dateFormatter}
            />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Latency" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ChartContent>
      </Charts>
      <Logs log={id}></Logs>
    </Content>
  );
};

export default Service;
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
  text-transform: uppercase;
`;

const Charts = styled.div`
  width: 100%;
  /* justify-content: space-around; */
  display: flex;
  margin: 42px 0;
`;
const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 400px;
  height: 400px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
`;
const ChartContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 400px;
  background: #ffffff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
  margin-left: 40px;
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
  font-size: 24px;
  color: #000000;
`;
