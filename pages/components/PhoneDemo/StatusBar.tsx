import { CgBatteryFull } from 'react-icons/cg'
import { MdSignalCellularAlt, MdWifi } from 'react-icons/md'
import Clock from './Clock'
import ContactSVG from './ContactSVG'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const StatusBar = () => {
  return (
    <div className='rounded-t-[36px] border-b border-[#E9E9EB] bg-[#ECECED]'>
      <div className='flex justify-between pt-1'>
        <div className='flex w-1/3 justify-center'>
          <Clock time='12:00PM' transition={{ delay: 5 }} initial={{ opacity: 1 }} animate={{ opacity: 0 }} />
          <Clock time='6:00PM' transition={{ delay: 5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        </div>
        <div className='relative -top-1 flex h-6  w-1/3 items-center justify-center rounded-b-xl bg-black'>
          <div className='flex gap-1'>
            <div className='h-1 w-6 rounded-lg bg-slate-700'></div>
            <div className='h-1 w-1 rounded-full bg-slate-700'></div>
          </div>
        </div>
        <div className='flex w-1/3 items-center justify-center gap-1 text-sm'>
          <MdSignalCellularAlt />
          <MdWifi />
          <CgBatteryFull />
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <BsChevronLeft className='col-span-1 col-start-1 mt-3 ml-2 text-2xl text-blue-600' />
        <div className='col-span-1 col-start-2 mt-1 mb-1 flex flex-col items-center justify-center space-y-1'>
          <div className='h-9 w-9 overflow-hidden rounded-full bg-black'>
            <ContactSVG />
          </div>
          <div>
            <span className='text-[10px] text-black'>WhosGaming</span>
            <BsChevronRight className='mt-1 inline text-[8px] text-slate-700' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusBar
