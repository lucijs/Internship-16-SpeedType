import { IconButton } from "@mui/material";
import classes from "./index.module.css";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useTheme } from "../../providers/ThemeProvider";

const ThemeButton = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <IconButton onClick={toggleMode} className={classes.themeButton}>
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeButton;
