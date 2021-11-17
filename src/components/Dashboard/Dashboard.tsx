import React from "react";
import styled from "styled-components";
import Dots from "../../../images/icon-ellipsis.svg";
import IconWork from "../../../images/icon-work.svg";
import data from "../../../data.json";

const Wrapper = styled.div`
  width: 70%;
  /* background-color: pink; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* grid-template-rows: 1fr 1fr; */
  gap: 1.5rem;
  grid-auto-rows: minmax(15rem, auto);
`;

const Container = styled.div`
  /* background-color: red; */
  display: flex;
  position: relative;
`;

const MainBoard = styled.div`
  /* background-color: white; */
  grid-row: 1/3;
  display: flex;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 600px) {
    grid-row: 1/1;
  }
`;

const StatsBox = styled.div`
  background-color: ${(props) => props.theme.colors.DarkBlue};
  height: 82%;
  width: 100%;
  align-self: flex-end;
  border-radius: 15px;
  z-index: 3;
  position: relative;
  padding: 1.2rem;

  svg {
    position: absolute;
    right: 28px;
    top: 28px;
  }
`;

const Banner = styled.div`
  background-color: ${(props) => props.theme.colors.LightOrange};
  width: 100%;
  height: 25%;
  border-radius: 15px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: flex-end;

  svg {
    margin-right: 0.8rem;
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.White};
`;

const BigText = styled.p`
  padding-top: 1rem;
  font-size: 3.4rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.White};
`;

const TextInfo = styled.p`
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.PaleBlue};
`;

const Profile = styled.div`
  z-index: 3;
  width: 100%;
  height: 68%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.BlueColor};
  position: absolute;
  left: 0;
  top: 0;
  padding: 1.2rem;
`;

const Switch = styled.div`
  height: 37%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.DarkBlue};
  border-radius: 15px;
  align-self: flex-end;
  padding: 1.2rem;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <MainBoard>
        <Profile>
          <TextInfo>Report for</TextInfo>
          <BigText>Jeremy Robson</BigText>
        </Profile>
        <Switch>
          <TextInfo>Daily</TextInfo>
          <TextInfo>Weekly</TextInfo>
          <TextInfo>Monthly</TextInfo>
        </Switch>
      </MainBoard>
      {data.map((item) => {
        return (
          <Container key={item.title}>
            <Banner>
              <IconWork />
            </Banner>
            <StatsBox>
              <Title>{item.title}</Title>
              <BigText>{item.timeframes.daily.current}hrs</BigText>
              <TextInfo>
                Last Week - {item.timeframes.daily.previous}hrs
              </TextInfo>
              <Dots />
            </StatsBox>
          </Container>
        );
      })}

      {/* <Container>xd</Container>
      <Container>xd</Container>
      <Container>xd</Container>
      <Container>xd</Container>
      <Container>xd</Container> */}
    </Wrapper>
  );
};

export default Dashboard;
