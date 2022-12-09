import type { NextPage } from 'next'

import { IoIosCamera, IoIosAppstore } from 'react-icons/io'
import { FaArrowCircleUp } from 'react-icons/fa'
import { MdSignalCellularAlt, MdWifi } from 'react-icons/md'
import { CgBatteryFull, CgBattery } from 'react-icons/cg'

import Message from './Message'

const Story: NextPage = () => {
  return (
    <div className='relative flex min-h-[500px] w-[280px] min-w-[280px] flex-col rounded-[36px] border-4 border-black bg-white shadow-xl'>
      <div className='absolute left-8 top-1 z-50 text-xs'>10:34</div>
      <MdSignalCellularAlt className='absolute right-[4.5rem] top-1 z-50 text-sm' />
      <MdWifi className='absolute right-12 top-1 z-50 text-sm' />
      <CgBatteryFull className='absolute right-6 top-1 z-50 text-sm' />
      <div className='flex w-full flex-col  items-center rounded-t-[36px] border-b border-[#E9E9EB] bg-[#ECECED]'>
        <div className='z-20 flex h-5 w-1/3 items-center justify-center rounded-b-xl bg-black'>
          <div className='flex gap-1'>
            <div className='h-1 w-6 rounded-lg bg-slate-700'></div>
            <div className='h-1 w-1 rounded-full bg-slate-700'></div>
          </div>
        </div>
        <div className='mt-3 mb-1 flex flex-col items-center justify-center space-y-1'>
          <div className='bg-logo h-10 w-10 rounded-full bg-black bg-auto bg-center bg-no-repeat'></div>
          <p className='text-xs text-black'>WhosGaming</p>
        </div>
      </div>
      <div className='mb-auto space-y-3 p-4'>
        <Message
          time='Today, 12:00PM'
          text='Are you gaming tonight? Please respond following example format: "yes @ 8:00PM" or simply "no".'
          response={false}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 20 }}
        />
        <Message
          text='Yes @ 7:30PM'
          response={true}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, type: 'spring', stiffness: 20 }}
        />
        <Message
          time='Today, 6:00PM'
          text='Tonight, 3 friends will be gaming at the average time of 7:45PM EST'
          response={false}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 5, type: 'spring', stiffness: 20 }}
        />
      </div>
      <div className='flex items-center justify-between gap-2 p-2 px-4 pb-3'>
        <IoIosCamera className='h-7 w-7 text-[#999]' />
        <IoIosAppstore className='h-6 w-6 text-[#999]' />
        <div className='ml-auto w-[65%] self-center justify-self-end'>
          <div className='flex items-center rounded-xl border border-[#999] py-1 px-2'>
            <p className='text-xs text-[#999]'>Text Message</p>
            <FaArrowCircleUp className='ml-auto h-5 w-5 text-[#6ACE6B]/50' />
          </div>
        </div>
      </div>
      <div className='mb-2 h-1 w-[40%] self-center rounded-xl bg-black'></div>
    </div>
  )
}

export default Story
