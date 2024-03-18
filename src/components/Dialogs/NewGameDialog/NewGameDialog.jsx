import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import classes from "../index.module.css";
import { GAME } from "../../../providers/GameInfoProvider";

const NewGameDialog = ({ isOpen, onClose, onSubmit }) => {
  const startRegular = () => {
    onSubmit(GAME.REGULAR, {});
    onClose();
  };

  const startInstantDeath = () => {
    onSubmit(GAME.INSTANT_DEATH, {});
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        Do you want to play regular or instant death mode?
      </DialogTitle>
      <DialogActions>
        <Button onClick={startRegular} className={classes.dialog}>
          Regular
        </Button>
        <Button onClick={startInstantDeath} className={classes.dialog}>
          Instant death
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGameDialog;
