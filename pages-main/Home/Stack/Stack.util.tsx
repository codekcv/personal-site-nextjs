import Item from 'components/general/Item/Item.main'

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
