import styled from 'styled-components'
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type Props = LayoutProps &
  TypographyProps &
  ColorProps &
  SpaceProps &
  ShadowProps

const Text = styled.p<Props>`
  ${compose(layout, typography, color, space, shadow)}
`

export default Text
