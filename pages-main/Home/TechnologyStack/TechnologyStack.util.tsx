import Item from 'components/general/Item/Item.main'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export const animDuration = 1
export const animDelay = 350

export const Card = styled(motion.div)<{ width: number | string } & SpaceProps>`
  margin-top: 1rem;
  margin: 0 1rem;
  border-radius: 12px;
  width: ${(props) => props.width};
  box-shadow: 0 0 3rem -1.5rem #ccc;
  ${space}
`

export const frontEndTechnologies = [
  'TypeScript',
  'React',
  'Redux',
  'Apollo Client',
  'styled-components',
  'styled-system',
  'React Hook Form',
  'Next.js',
  'React Testing Library'
].map((item) => (
  <Item key={item} mx={2}>
    {item}
  </Item>
))

export const backEndTechnologies = [
  'TypeScript',
  'Node.js',
  'Koa',
  'Apollo Server',
  'GraphQL',
  'PostgreSQL',
  'Prisma',
  'Nexus',
  'JWT'
].map((item) => (
  <Item key={item} mx={2}>
    {item}
  </Item>
))
