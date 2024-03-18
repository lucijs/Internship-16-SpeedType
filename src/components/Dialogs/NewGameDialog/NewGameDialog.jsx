import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import classes from "../index.module.css";

const NewGameDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        Do you want to play regular or instant death mode?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit} className={classes.dialog}>
          Regular
        </Button>
        <Button onClick={onClose} className={classes.dialog}>
          Instant death
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGameDialog;
