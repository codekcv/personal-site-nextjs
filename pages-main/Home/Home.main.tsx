import Box from 'components/general/Box/Box.main'
import Flex from 'components/general/Flex/Flex.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import profileImage from 'public/images/christian_villamin.jpg'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

import {
  animDelay,
  animDuration,
  backEndTechnologies,
  Card,
  frontEndTechnologies,
  ImageContainer
} from './Home.util'

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Christian Villamin | A Personal Site</title>
      <link rel="icon" href="/favicon.ico" />

      <meta
        name="description"
        content="My own personal slice of the internet."
      />
    </Head>

    <Flex flexDirection="column" alignItems="center" mb="100vh">
      <Flex
        as={motion.div}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 85px - 48px - 2rem)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animDuration }}
      >
        <Flex flexDirection="column" alignItems="center">
          <ImageContainer>
            <Image
              className="profile-picture"
              src={profileImage}
              width={256}
              height={256}
              alt="Picture of Christian Villamin"
              placeholder="blur"
            />
          </ImageContainer>

          <Text as="h1" fontSize={64}>
            Christian Villamin
          </Text>

          <Text as="p" fontSize={24}>
            I&apos;m a software engineer specializing at web applications.
          </Text>
        </Flex>
      </Flex>

      <InView>
        {({ inView, ref }) => (
          <Box
            as={motion.div}
            height={48}
            ref={ref}
            variants={{
              out: { opacity: 0 },
              in: {
                opacity: 1,
                transform: [
                  'translateY(-1rem)',
                  'translateY(0rem)',
                  'translateY(-1rem)'
                ]
              }
            }}
            animate={inView ? 'in' : 'out'}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <FaAngleDoubleDown size={48} />
          </Box>
        )}
      </InView>

      <Box width={[1]}>
        <InView threshold={1} delay={animDelay} triggerOnce>
          {({ inView, ref }) => (
            <Text
              as={motion.h1}
              fontSize="4rem"
              textAlign="center"
              mt="6rem"
              variants={{
                out: { opacity: 0, transform: 'translateY(6rem)' },
                in: { opacity: 1, transform: 'translateY(0rem)' }
              }}
              initial="out"
              animate={inView ? 'in' : 'out'}
              transition={{ duration: animDuration, ease: 'easeOut' }}
              ref={ref}
            >
              Technology Stack
            </Text>
          )}
        </InView>

        <InView threshold={1} delay={animDelay} triggerOnce>
          {({ inView, ref }) => (
            <Flex justifyContent="center" mt="1.5rem" ref={ref}>
              <Card
                variants={{
                  out: { opacity: 0, transform: 'translateX(-6rem)' },
                  in: { opacity: 1, transform: 'translateX(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration, ease: 'easeOut' }}
              >
                <Text as="h2" textAlign="center">
                  Back-End Technologies:
                </Text>

                <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
                  {backEndTechnologies}
                </Flex>
              </Card>

              <Card
                variants={{
                  out: { opacity: 0, transform: 'translateX(6rem)' },
                  in: { opacity: 1, transform: 'translateX(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration, ease: 'easeOut' }}
              >
                <Text as="h2" textAlign="center">
                  Front-End Technologies:
                </Text>

                <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
                  {frontEndTechnologies}
                </Flex>
              </Card>
            </Flex>
          )}
        </InView>
      </Box>
    </Flex>
  </>
)

export default Home
