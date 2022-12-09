import type { NextPage } from 'next'
import { motion } from 'framer-motion'

interface Props {
  text: string
  animate?: object
  transition?: object
  initial?: object
}

const Clock: NextPage<Props> = ({ text, animate, transition, initial }) => {
  return (
    <motion.div
      initial={initial}
      className='absolute left-8 top-2 z-50 text-xs'
      animate={animate}
      transition={transition}
    >
      <div>{text}</div>
    </motion.div>
  )
}

export default Clock
