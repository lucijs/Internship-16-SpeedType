import { DIALOG, useDialog } from "../../providers/DialogProvider";
import NewGameDialog from "./NewGameDialog";
import PracticeDialog from "./PracticeDialog";

const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();
  return (
    <>
      <NewGameDialog
        isOpen={activeDialog === DIALOG.NEW_GAME_DIALOG}
        onClose={close}
        {...additionalProps}
      />
      <PracticeDialog
        isOpen={activeDialog === DIALOG.PRACTICE_DIALOG}
        onClose={close}
        {...additionalProps}
      />
    </>
  );
};

export default DialogSwitch;
