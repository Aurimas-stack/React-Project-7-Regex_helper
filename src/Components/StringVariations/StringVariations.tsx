import { FC } from "react";

import "./StringVariations.css";

interface StringVariationProps {
  stringVariations: string[];
  stringVarBool: boolean[];
  onStringVariationRegex: () => void;
}

const StringVariations: FC<StringVariationProps> = ({
  stringVariations,
  stringVarBool,
  onStringVariationRegex,
}) => {
  return (
    <div className="string_var_cont">
      {stringVariations.length > 0 ? (
        <div className="string_variations">
          {stringVariations.map((string, i) => {
            return (
              <h3
                key={i}
                style={
                  stringVarBool[i] === true
                    ? { color: "green" }
                    : { color: "rgb(184, 30, 30)" }
                }
              >
                {i + 1 + ")" + string}
              </h3>
            );
          })}
          <button onClick={onStringVariationRegex}>Check All</button>
        </div>
      ) : null}
    </div>
  );
};

export default StringVariations;
