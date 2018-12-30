import React from "react";
import { Flex, Provider, styled, injectGlobal } from "reakit";
import defaultTheme from "reakit-theme-default";
import SEO from "../components/SEO";

injectGlobal`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;

const StyledApp = styled(Flex)`
  color: ${props => props.theme.colors.white};
  background-color: #e5ecf2;
  min-height: 100vh;
  flex-direction: column;
`;

const theme = {
  ...defaultTheme,
  colors: {
    white: "#ffffff",
    darkestBlue: "#22263c",
    darkBlue: "#282c43",
    violet: "#7870ac",
    lightBlue: "#6cb4cc",
    lightOrange: "#d4a782",
    orange: "#db857f",
    green: "#74aa8f",
    lightViolet: "#7992cb"
  },
  margin: {}
};

const Layout = props => (
  <Provider theme={theme}>
    <StyledApp width="100vw">
      <SEO />
      {props.children}
    </StyledApp>
  </Provider>
);

export default Layout;
