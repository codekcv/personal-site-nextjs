import styled from 'styled-components'
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps
} from 'styled-system'

type Props = LayoutProps & SpaceProps & FlexboxProps & BorderProps & ShadowProps

const Box = styled.div<Props>`
  ${compose(layout, space, flexbox, border, shadow)}
`

export default Box
