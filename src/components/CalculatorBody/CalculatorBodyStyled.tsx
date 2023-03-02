import styled from "styled-components";

const CalculatorBodyStyled = styled.div.attrs({
  className: "calculator",
})`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 500px;
  width: 320px;
  margin: 50px;

  position: absolute;
  left: 100px;
  top: 50px;
  background: linear-gradient(
    120deg,
    rgba(108, 108, 120, 1) 0%,
    rgba(55, 65, 60, 1) 20%,
    rgba(33, 33, 33, 1) 80%
  );
  padding: 15px;
  border-radius: 3%;
  box-shadow: -20px 15px 15px rgba(33, 33, 33, 0.25),
    -5px 3px 0 rgba(33, 33, 33, 1);
  transform: rotate(3deg);
`;

export default CalculatorBodyStyled;
