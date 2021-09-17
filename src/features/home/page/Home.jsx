import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Sidebar from '../template/Sidebar';
import { fetchLogsStart } from '../utils/action';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeBoard from './HomeBoard';
import Service from './Service';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLogsStart());
  }, []);
  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomeBoard} />
        <Route path="/service/:id" component={Service} />
      </Switch>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;
