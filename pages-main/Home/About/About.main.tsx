import Card from 'components/Card'
import Box from 'components/general/Box/Box.main'
import Item from 'components/general/Item/Item.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { animDelay, animDuration } from '../Home.util'

const facts = [
  'My name is Christian Villamin; I live in Manila, Philippines.',
  <>
    I&apos;m currently working at&nbsp;
    <a href="https://nextpay.world/" target="_blank" rel="noopener noreferrer">
      NextPay
    </a>{' '}
    as a senior front-end engineer.
  </>,
  <>
    I&apos;m a core member of&nbsp;
    <a href="https://reactjs.org.ph/" target="_blank" rel="noopener noreferrer">
      ReactJS Philippines.
    </a>
  </>,
  "I'm a self-taught programmer since age 10.",
  'I love learning, JavaScript, and open-source.',
  'I love mentoring aspiring web developers.'
].map((item, idx) => (
  <Item key={idx} ml="2rem" style={{ listStyle: 'initial' }}>
    {item}
  </Item>
))

const About = (): JSX.Element => {
  return (
    <Box mt="10vh">
      <InView threshold={0.5} delay={animDelay} triggerOnce>
        {({ inView, ref }) => (
          <Text
            as={motion.h1}
            fontSize="4rem"
            textAlign="center"
            mt="6rem"
            textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
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

      <InView threshold={0.5} delay={animDelay} triggerOnce>
        {({ inView, ref }) => (
          <Card
            width="100%"
            mt="3rem"
            ref={ref}
            variants={{
              out: { opacity: 0, transform: 'translateY(-3rem)' },
              in: { opacity: 1, transform: 'translateY(0rem)' }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
            transition={{ duration: animDuration, ease: 'easeOut' }}
          >
            <Item as="ul">{facts}</Item>

            <Text mt="2rem">
              Outside of the technology world in my free time, I play classical
              piano, read light fantasy novels, do some stretching and
              exercises, and take care of my lovely cats.
            </Text>
          </Card>
        )}
      </InView>
    </Box>
  )
}

export default About
