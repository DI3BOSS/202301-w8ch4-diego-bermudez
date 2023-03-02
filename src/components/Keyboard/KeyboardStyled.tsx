import styled from "styled-components";

const KeyboardStyled = styled.main.attrs({
  className: "keyboard",
})`
  width: 270px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  rotate: 3deg;
`;

export default KeyboardStyled;
