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

          <Text as="h1" color="#333" fontSize={64}>
            Christian Villamin
          </Text>

          <Text as="p" fontSize={24}>
            I&apos;m a software engineer specializing at web applications.
          </Text>
        </Flex>
      </Flex>

      <Box as={motion.div} height={48}>
        <FaAngleDoubleDown size={48} color="#333" />
      </Box>

      <Box width={[1]}>
        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <Text
              as={motion.h1}
              color="#333"
              fontSize="4rem"
              textAlign="center"
              mt="6rem"
              variants={{
                out: { opacity: 0 },
                in: { opacity: 1 }
              }}
              initial="out"
              animate={inView ? 'in' : 'out'}
              transition={{ duration: animDuration }}
              ref={ref}
            >
              Technology Stack
            </Text>
          )}
        </InView>

        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <Flex justifyContent="center" mt="3.5rem" ref={ref}>
              <Card
                variants={{
                  out: { opacity: 0, transform: 'translateX(-2rem)' },
                  in: { opacity: 1, transform: 'translateX(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration }}
              >
                <Text>Front-End Technologies:</Text>
                <Flex mt="0.35rem">{frontEndTechnologies}</Flex>
              </Card>

              <Card
                variants={{
                  out: { opacity: 0, transform: 'translateX(2rem)' },
                  in: { opacity: 1, transform: 'translateX(0rem)' }
                }}
                initial="out"
                animate={inView ? 'in' : 'out'}
                transition={{ duration: animDuration }}
              >
                <Text>Back-End Technologies:</Text>
                <Flex mt="0.35rem">{backEndTechnologies}</Flex>
              </Card>
            </Flex>
          )}
        </InView>
      </Box>
    </Flex>
  </>
)

export default Home
