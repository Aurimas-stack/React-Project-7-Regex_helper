import React, { useState } from "react";

import { Inputs } from "../Inputs/Inputs";

import { shuffleWord } from "../Utils/Utils";

import "./App.css";

function App(): JSX.Element {
  const [string, setString] = useState<string>("");
  const [regex, setRegex] = useState<string>("");
  const [regexFlags, setRegexFlags] = useState<string>("");
  const [regexMatch, setRegexMatch] = useState<string>("");

  const handleRegex = (e: React.MouseEvent) => {
    e.preventDefault();
    let regexObj: RegExp;
    let regMatchAnswer: RegExpMatchArray | null;

    if (regexFlags.length > 0) {
      regexObj = new RegExp(regex, regexFlags);
    } else {
      regexObj = new RegExp(regex);
    }

    regMatchAnswer = string.match(regexObj);

    if (regMatchAnswer !== null) {
      setRegexMatch(regMatchAnswer.join(""));
    }
  };

  const handleRegexFlags = (e: string) => {
    const eventKeys: string[] = ["d", "g", "i", "m", "s", "u", "y"];

    if (e.length === 0) {
      setRegexFlags("");
    }

    if (!eventKeys.includes(e[e.length - 1])) return;

    setRegexFlags(e);
  };

  const handleStringVariations = () => {
    const wordArray: string[] = [];
    let array_length = 0;

    if (string.length === 0) return;

    while (array_length < 6) {
      wordArray.push(shuffleWord(string));
      array_length++;
    };
  }

  return (
    <div className="regex_App">
      <h1>Regex helper</h1>
      <Inputs
        string={string}
        setString={setString}
        regex={regex}
        setRegex={setRegex}
        onRegexSubmit={handleRegex}
        onRegexFlags={handleRegexFlags}
        regexFlags={regexFlags}
        onStringVariations={handleStringVariations}
      />
      <h2>String to get: {string}</h2>
      <h2>Current regex string: {regexMatch}</h2>
    </div>
  );
}

export default App;
