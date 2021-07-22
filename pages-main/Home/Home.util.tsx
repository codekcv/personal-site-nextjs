import Item from 'components/general/Item/Item.main'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const animDuration = 1
export const animDelay = 350

export const ImageContainer = styled.div`
  .profile-picture {
    border-radius: 50%;
    border: 1px solid red;
  }
`

export const Card = styled(motion.div)`
  margin-top: 1rem;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 12px;
  width: 50%;
  box-shadow: 0 0 3rem -1.5rem #ccc;
`

export const frontEndTechnologies = [
  'TypeScript',
  'React',
  'Redux',
  'Apollo Client',
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
