import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ThemeProvider from "./providers/ThemeProvider";
import DialogProvider from "./providers/DialogProvider";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <DialogProvider>
            <MainPage />
          </DialogProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
