import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import classes from "../index.module.css";

const PracticeDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Are you sure you want to practice writing?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit} className={classes.dialog}>
          Yes
        </Button>
        <Button onClick={onClose} className={classes.dialog}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PracticeDialog;
