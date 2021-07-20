import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    --border-radius-xs: 3px;
    --color-text: black;
    --color-background: white;
    --color-primary: #e600aa;
    --color-secondary: #fde1ff;
    --font-weight-medium: 500;
    --font-weight-bold: 600;
    --spacing-xs: 1rem;
    --spacing-sm: 1.5rem;
  }

  p {
    margin-bottom: var(--spacing-xs);
    margin-top: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout