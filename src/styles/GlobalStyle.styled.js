import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('/language-learning-app/fonts/roboto-latin-400-italic.woff2') format('woff2') , url('/language-learning-app/fonts/roboto-latin-400-italic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('/language-learning-app/fonts/roboto-latin-400-normal.woff2') format('woff2') , url('/language-learning-app/fonts/roboto-latin-400-normal.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('/language-learning-app/fonts/roboto-latin-500-normal.woff2') format('woff2') , url('/language-learning-app/fonts/roboto-latin-500-normal.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url('/language-learning-app/fonts/roboto-latin-700-normal.woff2') format('woff2') , url('/language-learning-app/fonts/roboto-latin-700-normal.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

:root {
    --primary: #9FBAAE;
    --backgroundApp: #F8F8F8;
    --backgroundPage: #FFF;
    --blackText: #121417;

    --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--backgroundApp);
    color: var(--blackText);
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
