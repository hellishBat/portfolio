// Global Styles
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Inter';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: url('@/assets/fonts/inter-regular.woff2') format('woff2'),
    url('@/assets/fonts/inter-regular.woff') format('woff');
}

:root {
  --color-white: #ffffff;
  --color-cyan: cyan;
}

html,
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-size: 1rem;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text}
}

#root {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
  overflow: hidden;
}

main {
  flex: 1 0 auto;
}

header,
footer {
  flex: 0 0 auto;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a,
button,
input {
  outline: transparent;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}

svg {
  fill: currentColor;
}

::selection {
  background-color: var(--color-cyan);
  color: var(--color-white);
}
`

export default GlobalStyles
