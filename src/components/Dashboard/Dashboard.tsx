import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ProfileImage from "../../../images/image-jeremy.png";
import Dots from "../../../images/icon-ellipsis.svg";
import IconWork from "../../../images/icon-work.svg";
import IconExercise from "../../../images/icon-exercise.svg";
import IconPlay from "../../../images/icon-play.svg";
import IconSelfCare from "../../../images/icon-self-care.svg";
import IconSocial from "../../../images/icon-social.svg";
import IconStudy from "../../../images/icon-study.svg";
import data from "../../../data.json";

const icons = [
  <IconWork key="1" />,
  <IconExercise key="2" />,
  <IconPlay key="3" />,
  <IconSelfCare key="4" />,
  <IconSocial key="5" />,
  <IconStudy key="6" />,
];

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

  @media screen and (max-width: 800px) {
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
  transition: all 0.5s ease;
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
  display: flex;
  flex-direction: column;

  div {
    padding-top: 0.8rem;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`;

const Switch = styled.div`
  height: 37%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.DarkBlue};
  border-radius: 15px;
  align-self: flex-end;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
`;

const Name = styled(BigText)`
  padding-top: 0;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

const TimeButton = styled(TextInfo)`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const returnIcon = (iconName: string) => {
  const icon = icons.find((item) =>
    item.type.name.includes(iconName.split(" ").join(""))
  );

  if (icon) {
    return icon;
  } else {
    return <IconWork />;
  }
};

const Dashboard = () => {
  type Time = "weekly" | "daily" | "monthly";
  type MyType = {
    title: string;
    timeFrames: {
      current: string;
      previous: string;
    };
  };

  const [match, setMatch] = React.useState<Time>("daily");
  const [current, setCurrent] = React.useState<MyType[] | null>(null);

  React.useEffect(() => {
    const newArray: any = data.map((item) => {
      return { title: item.title, timeFrames: item.timeframes[match] };
    });

    setCurrent(newArray);
    console.log(icons);
  }, [match]);

  return (
    <Wrapper>
      <MainBoard>
        <Profile>
          <Image
            src={ProfileImage}
            width={60}
            height={60}
            alt="Profile Picture"
            layout="fixed"
          />
          <div>
            <TextInfo>Report for</TextInfo>
            <Name>Jeremy Robson</Name>
          </div>
        </Profile>
        <Switch>
          <TimeButton onClick={() => setMatch("daily")}>Daily</TimeButton>
          <TimeButton onClick={() => setMatch("weekly")}>Weekly</TimeButton>
          <TimeButton onClick={() => setMatch("monthly")}>Monthly</TimeButton>
        </Switch>
      </MainBoard>
      {current?.map((item) => {
        return (
          <Container key={item.title}>
            <Banner>{returnIcon(item.title)}</Banner>
            <StatsBox>
              <Title>{item.title}</Title>
              <BigText>{item.timeFrames.current}hrs</BigText>
              <TextInfo>Last Week - {item.timeFrames.previous}hrs</TextInfo>
              <Dots />
            </StatsBox>
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Dashboard;
