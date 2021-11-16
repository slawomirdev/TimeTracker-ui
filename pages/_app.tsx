import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: 'Rubik', sans-serif;
}
`;

const theme = {
  colors: {
    BlueColor: "hsl(246, 80%, 60%)",
    LightRedColor: "hsl(15, 100%, 70%)",
    Softblue: "hsl(195, 74%, 62%)",
    Lightred: "hsl(348, 100%, 68%)",
    Limegreen: "hsl(145, 58%, 55%)",
    Violet: "hsl(264, 64%, 52%)",
    Softorange: "hsl(43, 84%, 65%)",
    VeryDarkBlue: "hsl(226, 43%, 10%)",
    DarkBlue: "hsl(235, 46%, 20%)",
    Desaturatedblue: "hsl(235, 45%, 61%)",
    PaleBlue: "hsl(236, 100%, 87%)",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
