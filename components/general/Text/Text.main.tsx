import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

type Props = TypographyProps

const Text = styled.p<Props>`
  ${typography}
`

export default Text
