import styled from 'styled-components'
import {
  color,
  ColorProps,
  compose,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type Props = TypographyProps & ColorProps & SpaceProps & ShadowProps

const Text = styled.p<Props>`
  ${compose(typography, color, space, shadow)}
`

export default Text
