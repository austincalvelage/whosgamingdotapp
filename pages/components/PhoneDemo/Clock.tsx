import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useEffect } from 'react'

interface Props {
  time: string
  animate?: object
  transition?: object
  initial?: object
}
const Clock: NextPage<Props> = ({ time, animate, transition, initial }) => {
  return (
    <motion.div
      initial={initial}
      className='relative flex items-center justify-center text-xs'
      animate={animate}
      transition={transition}
    >
      <div className='absolute z-20'>{time}</div>
    </motion.div>
  )
}

export default Clock
