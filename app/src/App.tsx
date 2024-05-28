import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyling";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { toastContainerConfigs } from "./configs";
import "react-toastify/dist/ReactToastify.css";
import { useInitial } from "./hooks/useInitial";

function App() {
  const theme = {
    color: {
      primary: "#0A2463",
      secondary: "#FFFAFF",
    },
  };
  useInitial();
  return (
    <>
      <ToastContainer {...toastContainerConfigs} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
