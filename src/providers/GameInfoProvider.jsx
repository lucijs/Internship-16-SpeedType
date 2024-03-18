import { createContext, useContext } from "react";

export const GAME = {
  REGULAR: "REGULAT",
  INSTANT_DEATH: "INSTANT_DEATH",
  PRACTICE: "PRACTICE",
};

const defaultContext = {
  mod: null,
  open: () => {},
  close: () => {},
  additionalProps: {},
};

const GameInfoContext = createContext(defaultContext);

const GameInfoProvider = ({ children }) => {
  const [activeMod, setActiveMod] = useState(defaultContext.mod);
  const [additionalProps, setAdditionalProps] = useState(
    defaultContext.additionalProps
  );

  const open = (dialog, additionalProps) => {
    setActiveMod(dialog);
    setAdditionalProps(additionalProps);
  };

  const close = () => {
    setActiveMod(null);
    setAdditionalProps({});
  };

  return (
    <GameInfoContext value={{ activeMod, open, close, additionalProps }}>
      {children}
    </GameInfoContext>
  );
};

export const useGameInfo = () => useContext(GameInfoContext);

export default GameInfoProvider;

//mod partije
//(regular/instant death) te igračeve informacije (broj prijeđenih levela i WPM)
