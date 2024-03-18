import { createContext, useContext, useState } from "react";

export const GAME = {
  REGULAR: "REGULAT",
  INSTANT_DEATH: "INSTANT_DEATH",
  PRACTICE: "PRACTICE",
};

const defaultContext = {
  activeMod: null,
  display: () => {},
  close: () => {},
  additionalProps: {},
};

const GameInfoContext = createContext(defaultContext);

const GameInfoProvider = ({ children }) => {
  const [activeMod, setActiveMod] = useState(defaultContext.activeMod);
  const [additionalProps, setAdditionalProps] = useState(
    defaultContext.additionalProps
  );

  const display = (mod, additionalProps) => {
    setActiveMod(mod);
    setAdditionalProps(additionalProps);
  };

  const close = () => {
    setActiveMod(null);
    setAdditionalProps({});
  };

  return (
    <GameInfoContext.Provider
      value={{ activeMod, display, close, additionalProps }}>
      {children}
    </GameInfoContext.Provider>
  );
};

export const useGameInfo = () => useContext(GameInfoContext);

export default GameInfoProvider;
