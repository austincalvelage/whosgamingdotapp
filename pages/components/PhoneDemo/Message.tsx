import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import classNames from 'classnames'

interface Props {
  time?: string
  text: string
  response: boolean
  animate?: object
  transition?: object
  initial?: object
}

export default function Message({ time, text, response, animate, transition, initial }: Props): JSX.Element {
  return (
    <motion.div initial={initial} className='flex flex-col space-y-2' animate={animate} transition={transition}>
      <span className='self-center text-xs text-[#8A8A8D]'>{time}</span>
      <p
        className={classNames(
          'w-fit max-w-[65%] rounded-lg p-2 text-xs shadow-md',
          response ? 'self-end bg-[#6ACE6B] text-white' : 'self-start bg-[#E9E9EB] text-black'
        )}
      >
        {text}
      </p>
    </motion.div>
  )
}
