import Header from "../../components/Header";
import ThemeButton from "../../components/ThemeButton";
import DialogSwitch from "../../components/Dialogs/DialogSwitch";
import GameSwitch from "../../components/Game/GameSwitch";

const MainPage = () => {
  return (
    <>
      <ThemeButton />
      <Header />
      <GameSwitch />
      <DialogSwitch />
    </>
  );
};

export default MainPage;
