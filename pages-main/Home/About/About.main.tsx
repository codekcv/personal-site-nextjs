import Bobble from 'components/Bobble'
import Card from 'components/Card'
import Box from 'components/general/Box/Box.main'
import Item from 'components/general/Item/Item.main'
import Text from 'components/general/Text/Text.main'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { animDelay, animDuration, triggerOnce } from '../Home.util'
import { facts } from './About.util'

const About = (): JSX.Element => {
  const posRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  useEffect(() => {
    if (isOpen && posRef?.current) {
      console.log('y:', posRef.current.getBoundingClientRect().y)
    }
  }, [isOpen])

  useEffect(() => {
    if (posRef?.current) {
      console.log(posRef.current.getBoundingClientRect().y, 'y')
    }

    if (cardRef?.current) {
      setHeight(cardRef?.current?.getBoundingClientRect().height)
    }
  }, [])

  const posX = posRef?.current?.getBoundingClientRect().x ?? 0
  let posY = posRef?.current?.getBoundingClientRect().y ?? 0
  let transform

  if (posY > 0) {
    transform = `translate(calc(-${posX}px + 10vw)
  , calc(-${posY}px))`
  } else {
    posY *= -1
    transform = `translate(calc(-${posX}px + 10vw)
  , calc(${posY}px))`
  }

  return (
    <Box mt="10vh" ref={ref}>
      <div ref={posRef}>
        <div style={{ position: 'relative', zIndex: 1 }}>
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
                  transform: 'scale(1.5) translateY(6rem)'
                },
                in: { opacity: 1, transform: 'scale(1) translateY(0rem)' }
              }}
              initial="out"
              animate={inView ? 'in' : 'out'}
              transition={{ duration: animDuration, ease: 'easeOut' }}
            >
              About
            </Text>
          </Bobble>
        </div>

        <div style={{ position: 'relative', zIndex: 0 }}>
          <motion.div
            variants={{
              out: {
                opacity: 0,
                transform: 'translateY(-3rem)',
                transition: { duration: animDuration, ease: 'easeOut' }
              },
              in: {
                opacity: 1,
                transform: 'translateY(0rem)',
                transition: { duration: animDuration, ease: 'easeOut' }
              }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
          >
            <motion.div
              whileHover={{
                transform: `translateY(${isOpen ? '0' : '-0.5'}rem)`
              }}
              style={{ height }}
            >
              <Card
                width="100%"
                mt="-1.5rem"
                variants={{
                  close: {},
                  open: {
                    transform,
                    width: '80vw',
                    height: 'calc(100vh - 85px)'
                  }
                }}
                animate={isOpen ? 'open' : 'close'}
                onClick={() => setIsOpen(!isOpen)}
                style={{ position: 'absolute' }}
                ref={cardRef}
              >
                <Item as="ul">{facts}</Item>

                <Text mt="2rem">
                  Outside of the technology world in my free time, I play
                  classical piano, read light fantasy novels, do some stretching
                  and exercises, and take care of my lovely cats.
                </Text>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Box>
  )
}

export default About
