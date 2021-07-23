import { motion } from 'framer-motion'
import styled from 'styled-components'
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system'

const Card = styled(motion.div)<LayoutProps & SpaceProps>`
  padding: 2rem;
  border: 1px dotted rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05),
    0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05);

  ${compose(layout, space)}
`

export default Card
