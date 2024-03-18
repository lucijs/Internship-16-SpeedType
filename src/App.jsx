import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ThemeProvider from "./providers/ThemeProvider";
import DialogProvider from "./providers/DialogProvider";
import GameInfoProvider from "./providers/GameInfoProvider";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <DialogProvider>
            <GameInfoProvider>
              <MainPage />
            </GameInfoProvider>
          </DialogProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
