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

const Flex = styled.div<Props>`
  display: flex;

  ${compose(layout, space, flexbox)}
`

export default Flex
