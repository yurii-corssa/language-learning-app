import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { colors } from "./variables";

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

:root {
  


    --yellow: #FFC107;
    --blueLink: #54ADFF;
    --blueGradient: linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%);
    --blueLight: #CCE4FB;
    --red: #F43F5E;
    --green: #00C3AD;
    --gray: #888888;
    --white: #FFFFFF;
    --boxShadowDefault: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    --boxShadowHover: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);
    
}

html {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.backgroundApp};
    color: ${colors.black};
}

* {
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


`;
