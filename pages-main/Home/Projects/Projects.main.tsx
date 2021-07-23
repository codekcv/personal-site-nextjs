import Box from 'components/general/Box/Box.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { animDelay, animDuration, triggerOnce } from '../Home.util'

const Projects = (): JSX.Element => {
  return (
    <Box mt="10vh">
      <InView threshold={0.5} delay={animDelay} triggerOnce={triggerOnce}>
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
            Projects
          </Text>
        )}
      </InView>
    </Box>
  )
}

export default Projects
