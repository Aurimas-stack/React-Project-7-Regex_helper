import { FC } from "react";

interface TextOutputProps {
  outputDescriptionString: string;
  outputString: string;
}

const TextOutput: FC<TextOutputProps> = ({
  outputString,
  outputDescriptionString,
}) => {
  return <h2>{outputDescriptionString + outputString}</h2>;
};

export default TextOutput;
