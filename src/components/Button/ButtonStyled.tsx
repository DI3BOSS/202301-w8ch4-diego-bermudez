import styled from "styled-components";

const ButtonStyled = styled.button.attrs({
  className: "button",
})`
  margin: 3px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  font-size: 24px;
  border-style: outset;
  width: 70px;
  height: 60px;
  color: rgba(240, 240, 240, 1);
  background: linear-gradient(
    120deg,
    rgb(118, 118, 122) 10%,
    rgba(100, 100, 110, 1) 25%,
    rgba(85, 85, 90, 1) 100%
  );
  background-color: rgba(120, 120, 130, 1);
  border-radius: 10%;
  transition: all 100ms linear 100ms;

  &:hover {
    background: linear-gradient(
      300deg,
      rgba(120, 120, 130, 1) 25%,
      rgba(85, 85, 90, 1) 100%
    );
    background-color: rgba(120, 120, 130, 1);
    border-style: inset;
    font-size: 30px;
    padding: 6px 16px;
  }
`;

export default ButtonStyled;
