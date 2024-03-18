import { Button } from "@mui/material";
import classes from "./index.module.css";
import { DIALOG, useDialog } from "../../providers/DialogProvider";
import { GAME, useGameInfo } from "../../providers/GameInfoProvider";
import { useState } from "react";

const Header = () => {
  const { open } = useDialog();
  const { display } = useGameInfo();
  const { wpn, overallPrecision, currentLevel } = useGameInfo();

  const handlePracticeClick = () => {
    open(DIALOG.PRACTICE_DIALOG, {
      onSubmit: () => display(GAME.PRACTICE, {}),
    });
  };

  const handleNewGameClick = () => {
    open(DIALOG.NEW_GAME_DIALOG, {
      onSubmit: display,
    });
  };

  return (
    <div className={classes.headerContainer}>
      <h1>Speed type</h1>
      <div>
        <p>Completed Levels: {currentLevel}</p>
        <p>Words per Minute (WPM): {wpn}</p>
        <p>Overall accuracy: {overallPrecision}</p>
      </div>
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
