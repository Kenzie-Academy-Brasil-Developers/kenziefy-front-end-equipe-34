import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
  color: white;
  font-family: 'Inter', sans-serif;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

-webkit-tap-highlight-color: transparent;

a:-webkit-any-link {
    color: none;
    text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

.App {
  min-width: 100vw;
  min-height: 100vh;

  background-color: var(--grey-3);
}

:root{
    --grey-0:#FFFFFF;
    --blue-0:#8DBDFF;
    --blue-1:#0080FF;
    --blue-2:#010C80;
    --grey-3:#141414;
    --grey-2:#313131;
    --grey-1:#D9D9D9;
    
    --grey-transparent: rgba(255, 255, 255, 0.4);
    --box-shadow: 0 4px 4px 0 #00000080;
    --success:#4CAF50;
    --negative:#BF2D2D;
    --font: Inter;
    --title: bold 21px;
    --headline: 12px;
    --headline-bold: bold 12px;
    --headline-italic: italic 12px;
    --border-radius: 4px;
}
  h1 {
    font-weight: 700;
    font-size: 1rem;
  }

`;

export default GlobalStyle;
