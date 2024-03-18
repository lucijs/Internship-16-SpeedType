import React, { useEffect, useState } from "react";
import classes from "../index.module.css";

const NewGame = () => {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  const [currIndex, setCurrIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [errorChars, setErrorChars] = useState(0);
  const [blurText, setBlurText] = useState(true);

  useEffect(() => {
    getText("level1").then((texts) => {
      const randomIndex = getRandomNumber();
      setText(texts[randomIndex].text);
    });
  }, []);

  const resetGame = () => {
    setInputText("");
    setCurrIndex(0);
    setCorrectChars(0);
    setErrorChars(0);
  };

  const renderText = () => {
    const renderedText = (typeof text === "string" ? text : "")
      .split("")
      .map((char, index) => {
        let color = "";

        if (index < inputText.length) {
          if (char === inputText[index]) color = "var(--correct-letter-color)";
          else color = "var(--wrong-letter-color)";
        } else color = "var(--input-text-color)";

        return (
          <span key={index} style={{ color }}>
            {char === " " &&
            inputText[index] !== " " &&
            inputText[index] !== undefined
              ? inputText[index]
              : char}
          </span>
        );
      });

    return renderedText;
  };

  const handleKeyDown = (e) => {
    const { key } = e;

    switch (key) {
      case "Escape":
        resetGame();
        break;

      case "Backspace":
        setInputText(inputText.slice(0, -1));
        setCurrIndex(Math.max(currIndex - 1, 0));
        setErrorChars(Math.max(errorChars - 1, 0));
        break;

      default:
        if (key.length !== 1) break;

        setInputText((prevInputText) => {
          let newInputText = prevInputText;

          if (text[currIndex] === " " && prevInputText === "") {
            newInputText += key;
            setCurrIndex(currIndex + 1);
            return newInputText;
          }

          newInputText += key;

          if (key === text[currIndex]) {
            setCurrIndex(currIndex + 1);
            setCorrectChars(correctChars + 1);
          } else setErrorChars(errorChars + 1);

          return newInputText;
        });

        break;
    }
  };

  return (
    <div className={classes.textInput}>
      <p>Click on the text below and start typing (esc to reset)</p>
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setBlurText(false)}
        className={`${classes.text} ${blurText ? classes.blurrText : ""}`}>
        {renderText()}
      </div>
    </div>
  );
};

export default NewGame;

const filePath = "../data.json";
const getText = (level) => {
  return new Promise((resolve) => {
    fetch(filePath)
      .then((r) => r.json())
      .then((json) => {
        resolve(json[level]);
      });
  });
};

const getRandomNumber = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  return randomIndex;
};
