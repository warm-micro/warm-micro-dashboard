import React from 'react';
import styled from 'styled-components';
const ServiceBtn = () => {
  return (
    <Container>
      <Image src={process.env.PUBLIC_URL + '/warm-micro.png'}></Image>
      <Title>Warm-micro</Title>
    </Container>
  );
};

export default ServiceBtn;

const Container = styled.div`
  cursor: pointer;
  width: 240px;
  height: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  background: #d2c7ff;
  color: #552bff;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 25px 20px;
  img {
    margin: 0 15px;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
