import styled from "styled-components";

const KeyboardStyled = styled.main.attrs({
  className: "keyboard",
})`
  width: 330px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-bottom: 10px;
`;

export default KeyboardStyled;
