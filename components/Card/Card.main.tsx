import { motion } from 'framer-motion'
import styled from 'styled-components'
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system'

const Card = styled(motion.div)<LayoutProps & SpaceProps>`
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 3rem -1.5rem #ccc;
  ${compose(layout, space)}
`

export default Card
