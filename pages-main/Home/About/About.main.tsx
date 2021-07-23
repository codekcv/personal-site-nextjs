import Box from 'components/general/Box/Box.main'
import Item from 'components/general/Item/Item.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import {
  animDelay,
  animDuration
} from '../TechnologyStack/TechnologyStack.util'

const facts = [
  "I'm currently working at NextPay as a senior front-end engineer.",
  "I'm a self-taught programmer.",
  'I love open-source and JavaScript.',
  'I love React.',
  'I love mentoring aspiring developers.'
].map((item) => <Item key={item}>{item}</Item>)

const About = (): JSX.Element => {
  return (
    <Box my="35vh">
      <InView threshold={0.5} delay={animDelay} triggerOnce>
        {({ inView, ref }) => (
          <Text
            as={motion.h1}
            fontSize="4rem"
            textAlign="center"
            mt="6rem"
            variants={{
              out: { opacity: 0, transform: 'scale(1.4)' },
              in: { opacity: 1, transform: 'scale(1)' }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
            transition={{ duration: animDuration, ease: 'easeOut' }}
            ref={ref}
          >
            About
          </Text>
        )}
      </InView>

      <Item as="ul" mt="2rem">
        {facts}
      </Item>

      <Text mt="2rem">
        Outside of the technology world in my free time, I play classical piano,
        read light fantasy novels, do some stretching and exercises, and take
        care of my lovely cats.
      </Text>
    </Box>
  )
}

export default About
