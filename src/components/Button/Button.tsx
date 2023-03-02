import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  value: number | string;
  className?: string;
}

const Button = ({ value, className }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{value}</ButtonStyled>;
};

export default Button;
