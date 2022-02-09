import React from "react";
import "./Inputs.css";

interface Props {
  string: string;
  regex: string;
  regexFlags: string;
  setString: (e: string) => void;
  setRegex: (e: string) => void;
  onRegexSubmit: (e: React.MouseEvent) => void;
  onRegexFlags: (e:string) => void;
  onStringVariations: (e: React.MouseEvent) => void;
}

export const Inputs: React.FC<Props> = ({
  string,
  setString,
  regex,
  setRegex,
  onRegexSubmit,
  onRegexFlags,
  regexFlags,
  onStringVariations
}): JSX.Element => {
  return (
    <form id="regex_form">
      <div className="input_text_container">
        <h2>String to test:</h2>
        <input
          type="text"
          placeholder="Enter text here..."
          value={string}
          onChange={(e) => setString(e.target.value)}
          required
        />
      </div>
      <div className="regex_inputs">
        <div className="input_text_container">
          <h2>/regex/:</h2>
          <input
            type="text"
            placeholder="Enter regex here..."
            value={regex}
            onChange={(e) => setRegex(e.target.value)}
            required
          />
        </div>
        <div className="input_text_container">
          <h2>/regex/flags:</h2>
          <input
            type="text"
            value={regexFlags}
            placeholder="d, g, i, m, s, u, y"
            onChange={(e) => onRegexFlags(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" onClick={onStringVariations}>
        Get string variations
      </button>
      <button type="submit" style={{marginLeft: 20}} onClick={onRegexSubmit}>Get regex</button>
    </form>
  );
};
