import { createGlobalStyle } from "styled-components";
import "@fontsource/share-tech-mono";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
}

h1,
h2,
h3
{
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
  padding: 0;
}
`;

export default GlobalStyles;
