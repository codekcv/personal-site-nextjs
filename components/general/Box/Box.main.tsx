import styled from 'styled-components'
import {
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system'

type Props = LayoutProps & SpaceProps & FlexboxProps

const Box = styled.div<Props>`
  ${compose(layout, space, flexbox)}
`

export default Box
