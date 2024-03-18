import { Button } from "@mui/material";
import classes from "./index.module.css";
import { DIALOG, useDialog } from "../../providers/DialogProvider";
import { GAME, useGameInfo } from "../../providers/GameInfoProvider";

const Header = () => {
  const { open } = useDialog();
  const { display } = useGameInfo();

  const fun = () => {};

  const handlePracticeClick = () => {
    open(DIALOG.PRACTICE_DIALOG, {
      onSubmit: () => display(GAME.PRACTICE, {}),
    });
  };

  const handleNewGameClick = () => {
    open(DIALOG.NEW_GAME_DIALOG, {
      onSubmit: () => display(GAME.PRACTICE, {}),
    });
  };

  return (
    <div className={classes.headerContainer}>
      <h1>Speed type</h1>
      <div className={classes.buttons}>
        <Button
          onClick={handlePracticeClick}
          variant="contained"
          className={classes.headerButton}>
          Practice
        </Button>
        <Button
          onClick={handleNewGameClick}
          variant="contained"
          className={classes.headerButton}>
          New game
        </Button>
      </div>
    </div>
  );
};

export default Header;
