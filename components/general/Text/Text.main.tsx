import styled from 'styled-components'
import {
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type Props = TypographyProps & ColorProps & SpaceProps

const Text = styled.p<Props>`
  ${compose(typography, color, space)}
`

export default Text
