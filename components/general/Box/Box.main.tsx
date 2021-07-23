import styled from 'styled-components'
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system'

type Props = LayoutProps &
  SpaceProps &
  FlexboxProps &
  BorderProps &
  ShadowProps &
  PositionProps

const Box = styled.div<Props>`
  ${compose(position, layout, space, flexbox, border, shadow)}
`

export default Box
