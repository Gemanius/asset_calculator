import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import Routes from "./routes";
import { useRequest } from "./hooks/useRequest";
import { appAssetService } from "./services/appAssetsFetch";

function App() {
  const theme = {
    color: {
      primary: "#0A2463",
      secondary: "#FFFAFF",
      // secondary: "#0d3a52",
    },
  };
  const getAppAssetsRequest = useRequest(appAssetService.get, appAssetService);
  const getAppAssets = () => {};
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
