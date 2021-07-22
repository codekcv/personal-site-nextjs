import Box from 'components/general/Box/Box.main'
import Flex from 'components/general/Flex/Flex.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profileImage from 'public/images/christian_villamin.jpg'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

import { ImageContainer } from './Hero.util'

const Hero = (): JSX.Element => {
  return (
    <Flex flexDirection="column" alignItems="center" mb="100vh">
      <Flex
        as={motion.div}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 85px - 48px - 2rem)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
            I&apos;m a software engineer specializing on web technologies.
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
    </Flex>
  )
}

export default Hero
