import "./Inputs.css";

interface Props {
  string: string;
  regex: string;
  setString: (e: string) => void;
  setRegex: (e: string) => void;
}

export const Inputs: React.FC<Props> = ({
  string,
  setString,
  regex,
  setRegex,
}) => {
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
      <div className="input_text_container">
        <h2>Regex:</h2>
        <input
          type="text"
          placeholder="Enter regex here..."
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
          required
        />
      </div>
      <button type="submit">Test regex</button>
    </form>
  );
};
