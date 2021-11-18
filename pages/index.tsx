import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Dashboard from "../src/components/Dashboard/Dashboard";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.VeryDarkBlue};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Time tracking dashboard</title>
        <meta name="description" content="Time tracking dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </div>
  );
};

export default Home;
