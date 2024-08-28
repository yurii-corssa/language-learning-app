import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { breakpoints, colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: italic;
    font-display: swap;
    src: local("Roboto") url('/language-learning-app/fonts/Roboto-RegularItalic.woff2') format('woff2') , url('/language-learning-app/fonts/Roboto-RegularItalic.woff') format('woff');
}


@font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: local("Roboto") url('/language-learning-app/fonts/Roboto-Regular.woff2') format('woff2') , url('/language-learning-app/fonts/Roboto-Regular.woff') format('woff');
}

@font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: local("Roboto") url('/language-learning-app/fonts/Roboto-Medium.woff2') format('woff2') , url('/language-learning-app/fonts/Roboto-Medium.woff') format('woff');
}

@font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: local("Roboto") url('/language-learning-app/fonts/Roboto-Bold.woff2') format('woff2') , url('/language-learning-app/fonts/Roboto-Bold.woff') format('woff');
}

html {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
}

body {
    background-color: ${colors.backgroundApp};
    color: ${colors.black};
}

*, 
*::before, 
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-color: ${colors.primary};

    /* outline: 1px solid red !important; */
}

a {
    color: currentColor;
    text-decoration: none;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

input, button, textarea, select {
    font: inherit;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;

  @media only screen and (max-width: ${breakpoints.tablet - 1}px) {
    min-height: calc(100dvh - 68px);
  }
  @media only screen and (min-width: ${breakpoints.tablet}px) {
    min-height: calc(100vh - 88px);
  }
`;
