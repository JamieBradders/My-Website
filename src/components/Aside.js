import * as React from 'react'
import styled from 'styled-components'

const Aside = ({ children, color }) => {
  return (
    <Wrapper style={{ '--color-secondary': color }}>
      {children}
    </Wrapper>
  )
}

// Export this wrapper
export const Wrapper = styled.aside`
  background-color: var(--color-secondary);
  border-radius: var(--border-radius-xs);
  border-left: 3px solid var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
`

export default Aside