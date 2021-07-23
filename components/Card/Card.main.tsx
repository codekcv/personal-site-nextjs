import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  compose,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps
} from 'styled-system'

type Props = PositionProps & LayoutProps & SpaceProps

const Card = styled(motion.div)<Props>`
  background-color: white;
  padding: 2rem;
  cursor: pointer;
  border: 1px dotted rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05),
    0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05);

  ${compose(position, layout, space)}
`

export default Card
