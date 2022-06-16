import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsla(225, 32%, 95%, 1);
}

@media (max-width: 767px){
  .show {
  display: block;
}

  .hide {
  display: none;
}
}


`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  tabletL: "1024px",
  laptop: "1200px",
  desktop: "1600px",
};

export const device = {
  mobileS: `max-width: ${size.mobileS}`,
  mobileM: `min-width: ${size.mobileM}`,
  mobileL: `min-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
  tabletL: `min-width: ${size.tabletL}`,
  laptop: `min-width: ${size.laptop}`,
  desktop: `min-width: ${size.desktop}`,
};

export default GlobalStyles;
