import Header from "../../components/Header";
import ThemeButton from "../../components/ThemeButton";
import DialogSwitch from "../../components/Dialogs/DialogSwitch";
import NewGame from "../../components/Game/NewGame";
import Practice from "../../components/Game/Practice";

const MainPage = () => {
  return (
    <>
      <ThemeButton />
      <Header />
      <NewGame />
      <Practice />
      <DialogSwitch />
    </>
  );
};

export default MainPage;
