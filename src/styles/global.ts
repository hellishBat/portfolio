// Global Styles
import { createGlobalStyle } from 'styled-components'
import { mxWidth } from '@/constants'
import { media } from '@/styles/media'
import './fonts.css'

const GlobalStyles = createGlobalStyle`

:root {
  // Colors
  --color-white: #ffffff;
  --color-amber-300: #fcd34d;
  --color-amber-400: #fbbf24;
  --color-yellow-200: #fef08a;
  --color-yellow-900: #713f12;
  --color-brown-200: #ebd5c6;
  --color-brown-900: #714528;
  --color-cyan-200: #a5f3fc;
  --color-cyan-900: #164e63;
  --color-blue-200: #bfdbfe;
  --color-blue-500: #448aff;
  --color-blue-600: #2962ff;
  --color-blue-900: #1e3a8a;
  --color-sky-200: #bae6fd;
  --color-sky-500: #1ac6ff;
  --color-sky-600: #00ace6;
  --color-sky-900: #0c4a6e;
  --color-royal-200: #bbcdf7;
  --color-royal-900: #103489;
  --color-indigo-200: #dcd2f9;
  --color-indigo-900: #311188;
  --color-pink-200: #fecdd3;
  --color-pink-900: #831843;

  // Shadows
  --shadow-color: rgb(0 0 0 / 0.1);
  --shadow-sm: 0 1px 3px 0 var(--shadow-color), 0 1px 2px -1px var(--shadow-color);
  --shadow-md: 0 4px 6px -1px var(--shadow-color), 0 2px 4px -2px var(--shadow-color);
  --shadow-lg: 0 10px 15px -3px var(--shadow-color), 0 4px 6px -4px var(--shadow-color);
  --shadow-xl: 0 25px 50px -12px var(--shadow-color);
  --shadow-inset: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);

  // Max Width
  --max-width: auto;

  ${media.sm} {
    --max-width: ${mxWidth.sm};
  }

  ${media.md} {
    --max-width: ${mxWidth.md};
  }

  ${media.lg} {
    --max-width: ${mxWidth.lg};
  }

  ${media.xl} {
    --max-width: ${mxWidth.xl};
  }

  ${media.xxl} {
    --max-width: ${mxWidth.xxl};
    
  }

  // Spacing
  --header-size: 3.5rem;
  --spacing-sm: 1rem;
  
  ${media.sm} {
    --header-size: 4.5rem;
    --spacing-sm: 1.5rem;
  }

  ${media.lg} {
    --header-size: 5rem;
  }
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

html {
  scroll-behavior: smooth;
}

body {
  padding-top: var(--header-size);
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Nunito Sans';
  color: ${({ theme }) => theme.colors.textPrimary};

  &.isLocked {
      overflow: hidden;
    }

  ${media.lg} {
    &.isLocked {
      overflow: unset;
    }
  }
}

#root {
  display: flex;
  flex-direction: column;
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
  border: none;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
  border-color: transparent;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
}

svg {
  fill: currentColor;
}

::selection {
  background-color: ${({ theme }) => theme.colors.accent};
  color: var(--color-white);
}
`

export default GlobalStyles
