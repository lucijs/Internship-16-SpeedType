import { useState } from "react";
import classes from "../index.module.css";

const Practice = () => {
  const [inputText, setInputText] = useState("");

  const handleKeyDown = (e) => {
    const { key } = e;

    switch (key) {
      case "Escape":
        setInputText("");
        break;

      case "Backspace":
        setInputText(inputText.slice(0, -1));
        break;

      default:
        if (key.length !== 1) break;

        setInputText((prevInputText) => {
          let newInputText = prevInputText;
          newInputText += key;

          return newInputText;
        });

        break;
    }
  };
  const color = "var(--text-color)";

  const renderText = () => {
    const renderedText = (typeof inputText === "string" ? inputText : "")
      .split("")
      .map((char, index) => {
        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      });

    return renderedText;
  };

  return (
    <div
      className={(classes.textInput)}
      onKeyDown={handleKeyDown}
      tabIndex={0}>
      <p>Start practicing by clicking on this text</p>
      <div className={`${classes.practiceText}`}>{renderText()}</div>
    </div>
  );
};

export default Practice;
