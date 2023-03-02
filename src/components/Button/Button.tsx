import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  value: number | string;
}

const Button = ({ value }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{value}</ButtonStyled>;
};

export default Button;
