import React from "react";
import { Box, Provider, styled, injectGlobal } from "reakit";
import defaultTheme from "reakit-theme-default";

injectGlobal`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;

const StyledApp = styled(Box)`
  color: ${props => props.theme.colors.white};
`;

const theme = {
  ...defaultTheme,
  colors: {
    white: "#ffffff",
    darkestBlue: "#22263c",
    darkBlue: "#272b42",
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
    <StyledApp height="100vh" width="100vw">
      {props.children}
    </StyledApp>
  </Provider>
);

export default Layout;
