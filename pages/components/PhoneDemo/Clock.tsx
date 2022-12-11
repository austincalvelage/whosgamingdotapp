import { motion } from 'framer-motion'

interface Props {
  time: string
  animate?: object
  transition?: object
  initial?: object
}

export default function Clock({ time, animate, transition, initial }: Props): JSX.Element {
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
