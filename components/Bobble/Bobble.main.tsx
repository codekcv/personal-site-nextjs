import { motion } from 'framer-motion'

import { bobbingRange, maxVary, minVary } from './Bobble.util'

const Bobble: React.FC = ({ children }) => (
  <motion.div
    animate={{ transform: bobbingRange.x.transform }}
    transition={{
      repeat: Infinity,
      duration:
        bobbingRange.x.duration /
        (Math.random() * (maxVary - minVary) + minVary)
    }}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <motion.div
      animate={{ transform: bobbingRange.y.transform }}
      transition={{
        repeat: Infinity,
        duration:
          bobbingRange.y.duration /
          (Math.random() * (maxVary - minVary) + minVary)
      }}
    >
      {children}
    </motion.div>
  </motion.div>
)

export default Bobble
