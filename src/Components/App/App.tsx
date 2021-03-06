import React, { useState } from "react";

import Inputs from "../Inputs/Inputs";
import StringVariations from "../StringVariations/StringVariations";
import TextOutput from "../TextOutput";

import { shuffleWord } from "../Utils/Utils";

import "./App.css";

function App(): JSX.Element {
  const [string, setString] = useState<string>("");
  const [regex, setRegex] = useState<string>("");
  const [regexFlags, setRegexFlags] = useState<string>("");
  const [regexMatch, setRegexMatch] = useState<string>("");
  const [stringVariations, setStringVariations] = useState<string[]>([]);
  const [stringVarBool, setStringVarBool] = useState<boolean[]>([]);

  const handleRegex = (e: React.MouseEvent) => {
    e.preventDefault();
    let neededStringRegex: RegExp;
    let regMatchAnswer: RegExpMatchArray | null;

    if (regexFlags.length > 0) {
      neededStringRegex = new RegExp(regex, regexFlags);
    } else {
      neededStringRegex = new RegExp(regex);
    }

    regMatchAnswer = string.match(neededStringRegex);

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

  const handleStringVariations = (e: React.MouseEvent) => {
    e.preventDefault();
    const wordArray: string[] = [];
    let array_length: number = 0;

    if (string.length === 0) return;

    while (array_length < 6) {
      wordArray.push(shuffleWord(string));
      array_length++;
    }

    setStringVariations(wordArray);
  };

  const handleStringVariationRegex = () => {
    const boolArray: boolean[] = [];

    if (regex.length === 0) return;

    stringVariations.forEach((stringVar) => {
      let tempVal: RegExp;
      if (regexFlags.length > 0) {
        tempVal = new RegExp(regex, regexFlags);
      } else {
        tempVal = new RegExp(regex);
      }
      boolArray.push(tempVal.test(stringVar));
    });

    setStringVarBool(boolArray);
  };

  return (
    <div className="regex_App">
      <h1>Regex helper</h1>
      <div className="input_string_cont">
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
        <StringVariations
          stringVariations={stringVariations}
          stringVarBool={stringVarBool}
          onStringVariationRegex={handleStringVariationRegex}
        />
      </div>
      <TextOutput
        outputString={string}
        outputDescriptionString={"String to get:"}
      />
      <TextOutput
        outputString={regexMatch}
        outputDescriptionString={"Current regex string:"}
      />
    </div>
  );
}

export default App;
