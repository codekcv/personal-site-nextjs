import styled from 'styled-components'
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system'

type Props = LayoutProps & SpaceProps & FlexboxProps & BorderProps

const Flex = styled.div<Props>`
  display: flex;

  ${compose(layout, space, flexbox, border)}
`

export default Flex
