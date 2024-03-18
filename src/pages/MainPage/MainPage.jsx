import Header from "../../components/Header";
import ThemeButton from "../../components/ThemeButton";
import DialogSwitch from "../../components/Dialogs/DialogSwitch";
import NewGame from "../../components/NewGame";

const MainPage = () => {
  return (
    <>
      <ThemeButton />
      <Header />
      <NewGame />
      <DialogSwitch />
    </>
  );
};

export default MainPage;
