import type { NextPage } from 'next'
import { IoIosCamera, IoIosAppstore } from 'react-icons/io'
import { FaArrowCircleUp } from 'react-icons/fa'
import { MdSignalCellularAlt, MdWifi } from 'react-icons/md'
import { CgBatteryFull, CgBattery } from 'react-icons/cg'

import Message from './Message'
import Clock from './Clock'
import ContactSvg from './ContactSvg'

const PhoneDemo: NextPage = () => {
  return (
    <div className='relative flex min-h-[525px] min-w-[280px] max-w-[280px] flex-col rounded-[40px] bg-white shadow-[0px_0px_0px_5px_#1f1f1f,0px_0px_0px_7px_#191919,0px_0px_0px_14px_#111]'>
      <Clock text='12:00PM' transition={{ delay: 5 }} initial={{ opacity: 1 }} animate={{ opacity: 0 }} />
      <Clock text='6:00PM' transition={{ delay: 5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <MdSignalCellularAlt className='absolute right-[4.5rem] top-2 z-50 text-sm' />
      <MdWifi className='absolute right-12 top-2 z-50 text-sm' />
      <CgBatteryFull className='absolute right-6 top-2 z-50 text-sm' />
      <div className='flex w-full flex-col  items-center rounded-t-[36px] border-b border-[#E9E9EB] bg-[#ECECED]'>
        <div className='z-20 flex h-6 w-1/3 items-center justify-center rounded-b-xl bg-black'>
          <div className='flex gap-1'>
            <div className='h-1 w-6 rounded-lg bg-slate-700'></div>
            <div className='h-1 w-1 rounded-full bg-slate-700'></div>
          </div>
        </div>
        <div className='mt-3 mb-1 flex flex-col items-center justify-center space-y-1'>
          <div className='h-9 w-9 overflow-hidden rounded-full bg-black'>
            <ContactSvg />
          </div>
          <p className='text-[10px] text-black'>WhosGaming</p>
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

export default PhoneDemo
