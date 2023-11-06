import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import Routes from "./routes";

function App() {
  const theme = {
    color: {
      primary: "#0A2463",
      secondary: "#FFFAFF",
      // secondary: "#0d3a52",
    },
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
