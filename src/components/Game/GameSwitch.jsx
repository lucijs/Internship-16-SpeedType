import { GAME, useGameInfo } from "../../providers/GameInfoProvider";
import NewGame from "./NewGame";
import Practice from "./Practice";

const GameSwitch = () => {
  const { activeMod } = useGameInfo();

  const renderComponent = () => {
    switch (activeMod) {
      case GAME.PRACTICE:
        return <Practice />;
      case GAME.REGULAR:
        return <NewGame />;
      case GAME.INSTANT_DEATH:
        return <NewGame />;
      default:
        return <></>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default GameSwitch;
