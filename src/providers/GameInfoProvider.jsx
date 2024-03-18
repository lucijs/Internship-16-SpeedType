import { createContext, useContext, useState } from "react";

export const GAME = {
  REGULAR: "REGULAR",
  INSTANT_DEATH: "INSTANT_DEATH",
  PRACTICE: "PRACTICE",
};

const defaultContext = {
  activeMod: null,
  currentLevel: 1,
  wpm: 0,
  overallPrecision: 0,
  display: () => {},
  levelFinished: () => {},
  close: () => {},
  additionalProps: {},
};

const GameInfoContext = createContext(defaultContext);

const GameInfoProvider = ({ children }) => {
  const [activeMod, setActiveMod] = useState(defaultContext.activeMod);
  const [currentLevel, setCurrentLevel] = useState(defaultContext.currentLevel);
  const [overallPrecision, setOverallPrecision] = useState(
    defaultContext.overallPrecision
  );
  const [wpm, setWPM] = useState(defaultContext.wpm);
  const [additionalProps, setAdditionalProps] = useState(
    defaultContext.additionalProps
  );

  const display = (mod, additionalProps) => {
    setActiveMod(mod);
    setAdditionalProps(additionalProps);
  };

  const levelFinished = (
    mod,
    level,
    overallPrecis,
    wordsPerMinute,
    additionalProps
  ) => {
    setActiveMod(mod);
    setCurrentLevel(level);
    setOverallPrecision(overallPrecis);
    setWPM(wordsPerMinute);
    setAdditionalProps(additionalProps);
  };

  const close = () => {
    setActiveMod(null);
    setCurrentLevel(null);
    setWPM(0);
    setOverallPrecision(0);
    setAdditionalProps({});
  };

  return (
    <GameInfoContext.Provider
      value={{ activeMod, currentLevel, wpm, display, close, additionalProps }}>
      {children}
    </GameInfoContext.Provider>
  );
};

export const useGameInfo = () => useContext(GameInfoContext);

export default GameInfoProvider;
