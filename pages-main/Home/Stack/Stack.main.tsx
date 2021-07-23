import Bobble from 'components/Bobble'
import Card from 'components/Card'
import Box from 'components/general/Box/Box.main'
import Flex from 'components/general/Flex/Flex.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { animDelay, animDuration, triggerOnce } from '../Home.util'
import { backEndTechnologies, frontEndTechnologies } from './Stack.util'

const Stack = (): JSX.Element => {
  return (
    <Box width={[1]} mt="10vh">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <InView threshold={1} delay={animDelay} triggerOnce={triggerOnce}>
          {({ inView, ref }) => (
            <Bobble>
              <Text
                as={motion.h1}
                fontSize="4rem"
                textAlign="center"
                mt="6rem"
                textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
                variants={{
                  out: {
                    opacity: 0,
                    transform: 'scale(1.5)  translateY(6rem)'
                  },
                  in: { opacity: 1, transform: 'scale(1)  translateY(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration, ease: 'easeOut' }}
                ref={ref}
              >
                Technology Stack
              </Text>
            </Bobble>
          )}
        </InView>
      </div>

      <div style={{ position: 'relative', zIndex: 0 }}>
        <InView threshold={0.35} delay={animDelay} triggerOnce={triggerOnce}>
          {({ inView, ref }) => (
            <Flex justifyContent="center" mt="-1.5rem" ref={ref}>
              <Card
                width="50%"
                mr="2rem"
                variants={{
                  out: { opacity: 0, transform: 'translateX(-6rem)' },
                  in: { opacity: 1, transform: 'translateX(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration, ease: 'easeOut' }}
              >
                <Text as="h2" textAlign="center">
                  Back-End
                </Text>

                <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
                  {backEndTechnologies}
                </Flex>
              </Card>

              <Card
                width="50%"
                ml="2rem"
                variants={{
                  out: { opacity: 0, transform: 'translateX(6rem)' },
                  in: { opacity: 1, transform: 'translateX(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration, ease: 'easeOut' }}
              >
                <Text as="h2" textAlign="center">
                  Front-End
                </Text>

                <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
                  {frontEndTechnologies}
                </Flex>
              </Card>
            </Flex>
          )}
        </InView>
      </div>
    </Box>
  )
}

export default Stack
