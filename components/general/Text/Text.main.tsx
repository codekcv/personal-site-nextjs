import styled from 'styled-components'
import {
  color,
  ColorProps,
  compose,
  typography,
  TypographyProps
} from 'styled-system'

type Props = TypographyProps & ColorProps

const Text = styled.p<Props>`
  ${compose(typography, color)}
`

export default Text
