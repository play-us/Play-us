import { createGlobalStyle } from 'styled-components';
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
	font-family: 'NanumSquareNeo', sans-serif;
}
/* HTML5 display-role reset for older browsers */
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
button{
	text-align: center;
	text-decoration: none;
	display: inline-block;
	border: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
@font-face {
    font-family: 'Noto Sans KR';
    src:url('./fonts/NanumSquareNeoTTF-bRg.ttf') format('woff'),
        url('./fonts/NanumSquareNeoTTF-bRg.ttf') format('woff2');
    /* 이런식으로 weight를 지정해서 사용할 수도 있다!*/
    font-weight: 400;
}

`;

export default GlobalStyle;
