import Item from 'components/general/Item/Item.main'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const animDuration = 1

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
  border: 1px solid silver;
  border-radius: 12px;
  width: 50%;
`

export const frontEndTechnologies = ['React', 'Redux', 'Apollo Client'].map(
  (item) => (
    <Item key={item} mx={2}>
      {item}
    </Item>
  )
)

export const backEndTechnologies = ['Node.js', 'Koa', 'Apollo Server'].map(
  (item) => (
    <Item key={item} mx={2}>
      {item}
    </Item>
  )
)
