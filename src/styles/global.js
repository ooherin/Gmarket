import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  html {
    font-family: 'Poppins', sans-serif;
  }
  button{
  -webkit-appearance: none; /* Safari 및 Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 다른 브라우저 */
  border:none;
}
`;
export default GlobalStyles;
