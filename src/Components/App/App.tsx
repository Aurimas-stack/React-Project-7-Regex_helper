import { useState } from "react";

import { Inputs } from "../../Inputs/Inputs";

import "./App.css";

function App() {
  const [string, setString] = useState<string>("");
  const [regex, setRegex] = useState<string>("");

  return (
    <div className="regex_App">
      <Inputs
        string={string}
        setString={setString}
        regex={regex}
        setRegex={setRegex}
      />
    </div>
  );
}

export default App;
