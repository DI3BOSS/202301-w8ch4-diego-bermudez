import keyboardKeys from "../../data/keyboardKeys";
import Button from "../Button/Button";
import KeyboardStyled from "./KeyboardStyled";

const Keyboard = (): JSX.Element => {
  return (
    <KeyboardStyled>
      {keyboardKeys.map((key) => (
        <Button value={key} />
      ))}
    </KeyboardStyled>
  );
};

export default Keyboard;
