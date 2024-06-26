import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*::selection{
    color: aliceblue;
    background-color: #C71585;
}

body {
    max-width: 1000vh;
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

section:nth-of-type(odd) {
    /* background-color: ${theme.colors.primaryBg}; */
}

section:nth-of-type(even) {
    /* background-color: ${theme.colors.secondoryBg}; */
}
`