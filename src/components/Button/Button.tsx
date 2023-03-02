import ButtonStyled from "./ButtonStyled";
import "@fontsource/share-tech-mono";

interface ButtonProps {
  value: number | string;
}

const Button = ({ value }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{value}</ButtonStyled>;
};

export default Button;
