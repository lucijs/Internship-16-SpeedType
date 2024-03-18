import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const PracticeDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Are you sure you want to practice writing?</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PracticeDialog;
