import styled from 'styled-components'
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system'

type Props = LayoutProps & SpaceProps

const Item = styled.li<Props>`
  list-style: none;
  ${compose(layout, space)}
`

export default Item
