import Bobble from 'components/Bobble'
import Box from 'components/general/Box/Box.main'
import Flex from 'components/general/Flex/Flex.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profileImage from 'public/images/christian_villamin.jpg'
import { useEffect, useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

import { animDuration } from '../Home.util'
import { contacts, ImageContainer } from './Hero.util'

const Hero = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolled && window.scrollY === 0) setIsScrolled(false)
      else if (!isScrolled && window.scrollY !== 0) setIsScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <Flex flexDirection="column" alignItems="center">
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

          <Bobble>
            <Text
              as="h1"
              fontSize={64}
              textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
            >
              Christian Villamin
            </Text>
          </Bobble>

          <Text as="p" fontSize={24}>
            I&apos;m a software engineer specializing on web technologies.
          </Text>

          <Flex as="ul">{contacts}</Flex>
        </Flex>
      </Flex>

      <InView>
        {({ inView, ref }) => (
          <motion.div
            variants={{
              out: { opacity: 0 },
              in: {
                opacity: 1
              }
            }}
            initial="out"
            animate={inView && !isScrolled ? 'in' : 'out'}
            transition={{ duration: animDuration }}
          >
            <Box
              as={motion.div}
              height={48}
              ref={ref}
              animate={{
                transform: [
                  'translateY(-1rem)',
                  'translateY(0rem)',
                  'translateY(-1rem)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
            >
              <FaAngleDoubleDown size={48} />
            </Box>
          </motion.div>
        )}
      </InView>
    </Flex>
  )
}

export default Hero
