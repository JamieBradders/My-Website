import styled from 'styled-components'
import { Wrapper as AsideWrapper } from './Aside'

const TextLink = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);

  ${AsideWrapper} & {
    font-weight: var(--font-weight-bold);
  }
`

export default TextLink