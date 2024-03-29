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
  const titleRef = useRef<HTMLDivElement>(null)
  const [titleY, setTitleY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  useEffect(() => {
    if (cardRef?.current) {
      setHeight(cardRef.current.getBoundingClientRect().height)
    }
  }, [])

  useEffect(() => {
    if (isOpen && window) {
      document.body.style.height = '100%'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.height = 'initial'
      document.body.style.overflowY = 'initial'
    }
  }, [isOpen])

  const handleOpen = () => {
    if (!isOpen) {
      const titlePosY = titleRef?.current?.getBoundingClientRect().y ?? 0
      setTitleY(titlePosY - (window.innerHeight / 2 - 60))
    }

    setIsOpen(!isOpen)
  }

  const posY = (posRef?.current?.getBoundingClientRect().y ?? 0) + 32
  const transform = `translate(-128px, calc(${posY * -1}px))`

  return (
    <Box mt="10vh" ref={ref}>
      <div ref={posRef}>
        <div style={{ position: 'relative', zIndex: isOpen ? 101 : 1 }}>
          <Bobble>
            <motion.div
              variants={{
                close: {},
                open: {
                  transform: `translate(-560px, ${
                    titleY * -1
                  }px) rotate(-90deg)`
                }
              }}
              transition={{ duration: 0.4 }}
              animate={isOpen ? 'open' : 'close'}
            >
              <Text
                as={motion.h1}
                display="inline"
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
                ref={titleRef}
              >
                About
              </Text>
            </motion.div>
          </Bobble>
        </div>

        <div style={{ position: 'relative', zIndex: isOpen ? 100 : 0, height }}>
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
            >
              <Card
                position="absolute"
                width="100%"
                mt="-1.5rem"
                variants={{
                  close: {},
                  open: {
                    transform,
                    width: 1024,
                    height: '100vh'
                  }
                }}
                animate={isOpen ? 'open' : 'close'}
                onClick={handleOpen}
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
