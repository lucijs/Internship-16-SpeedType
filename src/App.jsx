import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <MainPage />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
